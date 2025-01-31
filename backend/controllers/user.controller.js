import { validationResult } from "express-validator";
import UserModel from "../models/user.model.js";
// import { createAndConnectNewDB } from '../config/mongodb.config.js'

const registerUser = async (req, res) => {
  // --- ACTIONS ---
  // get firstname, lastname, email, password, confirmPassword from req body
  // check if any field is empty
  // check if user is already registered
  // check password and confirm password are same
  // check validation errors
  // if not hash password and create a newuser
  // generate token and send it back in responce along with newly created user
  // --- END OF ACTIONS ---

  const { firstname, lastname, email, password, confirmPassword } = req.body;
  // console.log(firstname, lastname, email, password, confirmPassword)

  // check if any field is empty
  if (!firstname || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // check password and confirm password are same
  if (!(password === confirmPassword)) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // express-validator errors
  const errors = validationResult(req);
  // console.log('user registration errors' , errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Input value Error', errors: errors.array() });
  }

  // check if user is already registered
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await UserModel.hashPassword(password);
  // console.log('hashedpassword', hashedPassword)
  try {
    var newUser = await UserModel.create(
      {
        firstname,
        lastname,
        email: email.toLowerCase(),
        password: hashedPassword,
        // userInstance: firstname
      })

    // await UserModel.findByIdAndUpdate({ _id: newUser._id }, {
    //   userInstance: `${newUser.firstname.replace(' ', '')}_${newUser._id}`
    // })


    // console.log('token ->', token)


    //  ----------------------------------------------------------------
    // Create new database for user and connect to it
    // let newDatabaseName = newUser.firstname + '_' + newUser._id
    // newDatabaseName = newDatabaseName.replace(' ', '')
    // console.log("NewDataBaseName: ", newDatabaseName)
    newUser = await UserModel.findOne().select('+password')

    const token = newUser.generateAuthToken()
    res.cookie('token', token)

    // await createAndConnectNewDB(newDatabaseName, newUser)
    //  ----------------------------------------------------------------


    res.status(201).json({ user: newUser, token, message: 'User Created' });
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Already Registered', error: err });
  }

}

const loginUser = async (req, res) => {
  // --- ACTIONS ---
  // get email, password from req body
  // check if any field is empty
  // check if user exist
  // check validation errors
  // check credentials and find user
  // --- END OF ACTIONS ---

  const { email, password } = req.body
  // console.log(email, password)

  // check if any field is empty
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // check if user exist
  const user = await UserModel.findOne({ email: email.toLowerCase() }).select('+password')
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // check validation errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Invalid Credentials', errors: errors.array() });
  }

  // check credentials and find user
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid Credentials' })
  }

  const token = user.generateAuthToken()
  res.cookie('token', token)

  res.status(200).json({ user, token, message: 'User Login' })
}

const logoutUser = (req, res) => {
  // --- ACTIONS ---
  // destroy user token
  // --- END OF ACTIONS ---
  res.clearCookie('token')
  res.status(200).json({ message: 'User Logout' })
}

const userProfile = (req, res) => {
  res.status(200).json({ user: req.user, message: 'User Profile' })
}


export { registerUser, loginUser, logoutUser, userProfile }
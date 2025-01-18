import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
  // --- Actions ---
  // get token from req headers or cookies
  // verify token
  // if token is valid, 
  //    decode it and find the user
  //    set req.user to user object
  // if token is invalid, 
  //    return error message with status 401
  // --- End Actions ---

  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  console.log('token', token)

  if (!token) {
    return res.status(401).json({ message: 'Unautorised User' });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    // console.log('decode', decode)

    const user = await UserModel.findOne({ _id: decode })

    if (!user) {
      return res.status(401).json({ message: 'Unautorised User' });
    }

    req.user = user;
    next();

  } catch (e) {
    return res.status(401).json({ message: 'Unautorised User' });
  }
}

export default userAuth
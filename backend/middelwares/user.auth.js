import mongoose from "mongoose";
import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import connectDB from "../config/mongodb.config.js";
// import connectDB from "../config/mongodb.config.js";

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

  // await connectDB(process.env.MONGODB_URI_ADMIN)
  // console.log('connected-db-auth', mongoose.connection.db.databaseName)

  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  // console.log('token - auth', token)
  // console.log('token - cookie', req.cookies?.token)
  // console.log('token - header', req.headers.authorization)

  if (!token) {
    return res.status(401).json({ message: 'Unautorised User - token not received' });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    console.log('decode', decode)
    // const userDBName = mongoose.connection.db.databaseName
    // const userId = userDBName.split('_')[1]
    // console.log(userId)

    const user = await UserModel.findById(decode.userID)
    // const users = await UserModel.find()
    // console.log('userAuth-users', users)

    if (!user) {
      return res.status(401).json({ message: 'Unautorised User - user not found' });
    }

    // console.log('userInstance:', req.userInstance)
    // console.log('current DB:', mongoose.connection.db.databaseName)

    req.user = user;
    await connectDB(decode.userInstance)
    next();

  } catch (e) {
    return res.status(401).json({ message: 'Unautorised User auth', error: e });
  }
}

export default userAuth
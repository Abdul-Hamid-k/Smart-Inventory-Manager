import mongoose from 'mongoose';
import UserModel from '../models/user.model.js';

const connectDB = async (database) => {
  await mongoose.disconnect().then('database disconnect...')
  await mongoose.connect(process.env.MONGODB_URI + database).then(() => {
    console.log(mongoose.connection.db.databaseName + ' MongoDB connected...');
  }).catch(err => console.log("Error connecting to MongoDB", err))
}

// const createAndConnectNewDB = async (newDatabaseName, User) => {
//   await mongoose.disconnect().then('database disconnect...')
//   await connectDB(newDatabaseName)
//   const db = mongoose.connection.db.databaseName
//   console.log('Current database:', db)
//   // mongoose.connection.useDb(newDatabaseName)
//   // console.log('User: ', User)

//   // console.log(User.firstname, User.lastname, User.email, User.password, User.userInstance)

//   await UserModel.create(
//     {
//       firstname: User.firstname,
//       lastname: User.lastname,
//       email: User.email,
//       password: User.password,
//       created_at: User.created_at,
//       userInstance: User.userInstance
//     })

//   console.log(`New MongoDB - ${db} connected... `);
// }


// export { createAndConnectNewDB }
export default connectDB;
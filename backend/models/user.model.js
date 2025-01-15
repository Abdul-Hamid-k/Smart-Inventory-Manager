import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [5, 'Firstname must be at least 5 characters long'],
    maxlength: [20, 'Lastname must be at most 20 characters long']
  },
  lastname: {
    type: String,
    maxlength: 20

  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false // Exclude password from the output
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

UserSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10)
}

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
  return token
}

UserSchema.methods.comparePassword = async function (password) {
  console.log(password, this.password)
  return await bcrypt.compare(password, this.password)
}

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
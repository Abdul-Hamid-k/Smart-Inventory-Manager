import express from 'express';
import { registerUser, loginUser, logoutUser, userProfile } from '../controllers/user.controller.js';
import { body } from 'express-validator';
import userAuth from '../middelwares/user.auth.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('firstname').isLength({ min: 5, max: 20 }).withMessage('Firstname should be at least 5 characters and at most 20 characters long'),
    body('lastname').isLength({ max: 20 }).withMessage('Lastname can be at most 20 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('confirmPassword').isLength({ min: 8 }).withMessage('confirmPassword must be at least 8 characters long'),
  ],
  registerUser)

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  ],
  loginUser)

router.get('/logout', logoutUser)

router.get('/user-profile', userAuth, userProfile)

export default router
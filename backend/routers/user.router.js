import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { registerUser, loginUser, logoutUser, userProfile, AddMaualPurchaseBill, GetPurchaseBills } from '../controllers/user.controller.js';
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

// purchase
// console.log(process.env.PRODUCTS_UNITS)
router.post('/add-manual-purchase-bill', [
  body('purchaseBill').notEmpty().withMessage('Purchase bill is required'),
  body('purchaseBill.shop').notEmpty().withMessage('Shop ID is required'),
  body('purchaseBill.products').isArray().withMessage('Products should be an array'),
  body('purchaseBill.products.*.quantity').isFloat({ gt: 0 }).withMessage('Product quantity should be more than 0'),
  body('purchaseBill.products.*.unit').isIn(process.env.PRODUCTS_UNITS)
    .withMessage('Unit must be one of the following: ' + process.env.PRODUCTS_UNITS),
], userAuth, AddMaualPurchaseBill)

router.get("/get-purchase-bills", userAuth, GetPurchaseBills)

export default router
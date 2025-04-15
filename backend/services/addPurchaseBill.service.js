import PurchaseBillModel from '../models/PurchaseBill.model.js';
import mongoose from 'mongoose';

const addPurchaseBill = async (shopId, billData) => {
  if (!billData) {
    throw new Error('Bill data is required');
  }

  try {
    // Create a new purchase bill
    const newBill = await PurchaseBillModel.create({
      shopId: shopId,
      date: billData.date || new Date(),
      totalAmount: billData.totalAmount,
      products: billData?.products.map(item => ({
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        pricePerUnit: item.pricePerUnit,
        amount: item.amount,
      })),
    });
    return newBill;
  } catch (error) {
    throw new Error('Error adding purchase bill: ' + error.message);
  }
}

export default addPurchaseBill
import mongoose from "mongoose";
import ShopModel from "../models/shop.model.js";

const addShop = async (shopData) => {
  if (!shopData) {
    throw new Error('Shop data is required');
  }

  try {
    console.log("AddPurchaseBill", mongoose.connection.db.databaseName)
    // Check if shop already exists
    console.log(shopData, shopData.shopName, shopData.address)
    const existingShop = await ShopModel.findOne({ shopName: shopData.shopName, address: shopData.address });
    console.log("existingShop:", existingShop)

    if (existingShop != null) {
      return existingShop
    }

    // Create a new shop
    const newShop = await ShopModel.create(shopData);

    return newShop;

  } catch (error) {
    throw new Error('Error adding shop: ' + error);
  }
}

export default addShop;
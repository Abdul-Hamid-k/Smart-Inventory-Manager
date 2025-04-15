import mongoose from "mongoose";

const ShopSchema = mongoose.Schema({
  shopName: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    length: 10,
  },
  purchaseBills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "PurchaseBill",
  }]
});

const ShopModel = mongoose.model("Shop", ShopSchema);

export default ShopModel;
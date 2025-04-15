import mongoose from "mongoose";

const PurchaseBillSchema = mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      pricePerUnit: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

const PurchaseBillModel = mongoose.model("PurchaseBill", PurchaseBillSchema);
export default PurchaseBillModel;
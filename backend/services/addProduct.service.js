import ProductModel from "../models/product.model.js";

const addProduct = async (productDetails) => {
  if (!productDetails) {
    throw new Error("Product details are required");
  }
  const { name, category, quantity, pricePerUnit } = productDetails;

  if (!name || !category || !quantity || !pricePerUnit) {
    throw new Error("All product details are required");
  }

  if (quantity <= 0) {
    throw new Error("Product quantity should be more than 0");
  }

  if (pricePerUnit <= 0) {
    throw new Error("Product price should be more than 0");
  }

  const existingProduct = await ProductModel.findOne({ name, category });
  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.pricePerUnit = Math.max(pricePerUnit, existingProduct.pricePerUnit); // Update price if needed
    await existingProduct.save();
    return existingProduct;
  }

  const newProduct = await ProductModel.create({
    name,
    category,
    quantity,
    pricePerUnit,
  });

  return newProduct;
}

export default addProduct;
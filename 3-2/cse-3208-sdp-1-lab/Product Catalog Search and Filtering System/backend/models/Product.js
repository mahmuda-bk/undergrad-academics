const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    prod_id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true, index: true },
    category: { type: String, required: true, trim: true, index: true },
    price: { type: Number, required: true, min: 0 },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true, collection: 'product' }
);

productSchema.index({ brand: 1, category: 1 });
productSchema.index({ name: 'text', description: 'text', brand: 'text', category: 'text' });

module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    prod_id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true, collection: 'product' }
);

module.exports = mongoose.model('Product', productSchema);

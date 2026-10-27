const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// GET /api/products
// Optional query params: brand, category, search, featured
router.get('/', async (req, res) => {
  try {
    const { brand, category, search, featured } = req.query;
    const filter = {};

    if (brand) filter.brand = brand;
    if (category) filter.category = category;
    if (featured === 'true') filter.featured = true;

    if (search && search.trim()) {
      const term = search.trim();
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.$or = [
        { name: regex },
        { description: regex },
        { brand: regex },
        { category: regex },
        { prod_id: regex }
      ];
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load products.' });
  }
});

router.get('/featured', async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load featured products.' });
  }
});

router.get('/brands', async (req, res) => {
  try {
    const brands = await Product.distinct('brand');
    res.json(brands.sort());
  } catch (error) {
    res.status(500).json({ message: 'Failed to load brands.' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.json(categories.sort());
  } catch (error) {
    res.status(500).json({ message: 'Failed to load categories.' });
  }
});

module.exports = router;

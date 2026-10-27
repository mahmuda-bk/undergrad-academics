require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    prod_id: 'P001',
    name: 'Nova Wireless Headphones',
    description: 'Immersive sound, soft ear cushions, and all-day wireless listening.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    featured: true
  },
  {
    prod_id: 'P002',
    name: 'Aero Smart Watch',
    description: 'A clean everyday smartwatch for activity tracking and notifications.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    featured: true
  },
  {
    prod_id: 'P003',
    name: 'Orbit Backpack',
    description: 'Minimal everyday carry with a laptop sleeve and practical storage.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    featured: true
  },
  {
    prod_id: 'P004',
    name: 'Luma Desk Lamp',
    description: 'A modern desk light designed for focused work and study sessions.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    featured: false
  },
  {
    prod_id: 'P005',
    name: 'Pulse Mechanical Keyboard',
    description: 'Compact mechanical keyboard with a comfortable typing experience.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    featured: false
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Sample products inserted successfully.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    "prod_id": "HD001",
    "name": "Classic Ceramic Vase",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Vases & Planters",
    "price": 1500
  },
  {
    "prod_id": "HD002",
    "name": "Luna Stoneware Planter",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Vases & Planters",
    "price": 1650
  },
  {
    "prod_id": "HD003",
    "name": "Sora Linen Cushion",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Cushions & Throws",
    "price": 1650
  },
  {
    "prod_id": "HD004",
    "name": "Milo Textured Throw",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Cushions & Throws",
    "price": 1800
  },
  {
    "prod_id": "HD005",
    "name": "Nora Woven Wall Basket",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Wall Decor",
    "price": 2150
  },
  {
    "prod_id": "HD006",
    "name": "Aster Framed Print",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Wall Decor",
    "price": 2300
  },
  {
    "prod_id": "HD007",
    "name": "Mira Ambient Lamp",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Lighting",
    "price": 2950
  },
  {
    "prod_id": "HD008",
    "name": "Cove Floor Lamp",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Lighting",
    "price": 3100
  },
  {
    "prod_id": "HD009",
    "name": "Elio Glass Candle",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Candles & Holders",
    "price": 2450
  },
  {
    "prod_id": "HD010",
    "name": "Nova Brass Holder",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Candles & Holders",
    "price": 2600
  },
  {
    "prod_id": "HD011",
    "name": "Rhea Decorative Tray",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Decorative Objects",
    "price": 3000
  },
  {
    "prod_id": "HD012",
    "name": "Sage Stone Object",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Decorative Objects",
    "price": 3150
  },
  {
    "prod_id": "HD013",
    "name": "Iris Ottoman Basket",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Storage & Trays",
    "price": 3050
  },
  {
    "prod_id": "HD014",
    "name": "Theo Wood Tray",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Storage & Trays",
    "price": 3200
  },
  {
    "prod_id": "HD015",
    "name": "Lumi Round Mirror",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Mirrors",
    "price": 4400
  },
  {
    "prod_id": "HD016",
    "name": "Arden Arched Mirror",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Mirrors",
    "price": 4550
  },
  {
    "prod_id": "HD017",
    "name": "Ayla Desk Clock",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Urban Nest",
    "category": "Clocks",
    "price": 3350
  },
  {
    "prod_id": "HD018",
    "name": "Moss Minimal Clock",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Clocks",
    "price": 3500
  },
  {
    "prod_id": "HD019",
    "name": "Vera Table Runner",
    "description": "Modern home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Tabletop Decor",
    "price": 3750
  },
  {
    "prod_id": "HD020",
    "name": "Orion Fruit Bowl",
    "description": "Minimalist home accent from Urban Nest, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Urban Nest",
    "category": "Tabletop Decor",
    "price": 3900
  },
  {
    "prod_id": "HD021",
    "name": "Classic Stoneware Planter",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Vases & Planters",
    "price": 900
  },
  {
    "prod_id": "HD022",
    "name": "Luna Ribbed Planter",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Vases & Planters",
    "price": 1050
  },
  {
    "prod_id": "HD023",
    "name": "Sora Textured Throw",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Cushions & Throws",
    "price": 1900
  },
  {
    "prod_id": "HD024",
    "name": "Milo Knitted Throw",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Cushions & Throws",
    "price": 2050
  },
  {
    "prod_id": "HD025",
    "name": "Nora Framed Print",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Wall Decor",
    "price": 4900
  },
  {
    "prod_id": "HD026",
    "name": "Aster Metal Wall Sculpture",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Wall Decor",
    "price": 5050
  },
  {
    "prod_id": "HD027",
    "name": "Mira Floor Lamp",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Lighting",
    "price": 5700
  },
  {
    "prod_id": "HD028",
    "name": "Cove Glass Lamp",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Lighting",
    "price": 5850
  },
  {
    "prod_id": "HD029",
    "name": "Elio Brass Holder",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1602874801006-e26d5e9e9c0d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Candles & Holders",
    "price": 900
  },
  {
    "prod_id": "HD030",
    "name": "Nova Ceramic Tealight",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Candles & Holders",
    "price": 1000
  },
  {
    "prod_id": "HD031",
    "name": "Rhea Stone Object",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Decorative Objects",
    "price": 2150
  },
  {
    "prod_id": "HD032",
    "name": "Sage Sculpture",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Decorative Objects",
    "price": 2300
  },
  {
    "prod_id": "HD033",
    "name": "Iris Wood Tray",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Storage & Trays",
    "price": 3100
  },
  {
    "prod_id": "HD034",
    "name": "Theo Rattan Basket",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "CasaLoom",
    "category": "Storage & Trays",
    "price": 3250
  },
  {
    "prod_id": "HD035",
    "name": "Lumi Arched Mirror",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Mirrors",
    "price": 7150
  },
  {
    "prod_id": "HD036",
    "name": "Arden Square Mirror",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Mirrors",
    "price": 7300
  },
  {
    "prod_id": "HD037",
    "name": "Ayla Minimal Clock",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Clocks",
    "price": 3200
  },
  {
    "prod_id": "HD038",
    "name": "Moss Wood Clock",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Clocks",
    "price": 3300
  },
  {
    "prod_id": "HD039",
    "name": "Vera Fruit Bowl",
    "description": "Textured home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Tabletop Decor",
    "price": 3000
  },
  {
    "prod_id": "HD040",
    "name": "Orion Salt Cellar",
    "description": "Bohemian home accent from CasaLoom, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "CasaLoom",
    "category": "Tabletop Decor",
    "price": 3100
  },
  {
    "prod_id": "HD041",
    "name": "Classic Ribbed Planter",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Vases & Planters",
    "price": 3650
  },
  {
    "prod_id": "HD042",
    "name": "Luna Bud Vase",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Vases & Planters",
    "price": 3750
  },
  {
    "prod_id": "HD043",
    "name": "Sora Knitted Throw",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Cushions & Throws",
    "price": 2150
  },
  {
    "prod_id": "HD044",
    "name": "Milo Velvet Cushion",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Cushions & Throws",
    "price": 2300
  },
  {
    "prod_id": "HD045",
    "name": "Nora Metal Wall Sculpture",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Wall Decor",
    "price": 3350
  },
  {
    "prod_id": "HD046",
    "name": "Aster Sunburst Mirror",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Wall Decor",
    "price": 3450
  },
  {
    "prod_id": "HD047",
    "name": "Mira Glass Lamp",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Lighting",
    "price": 3750
  },
  {
    "prod_id": "HD048",
    "name": "Cove Sculptural Lamp",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Lighting",
    "price": 3850
  },
  {
    "prod_id": "HD049",
    "name": "Elio Ceramic Tealight",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Candles & Holders",
    "price": 1450
  },
  {
    "prod_id": "HD050",
    "name": "Nova Scented Candle",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1602874801006-e26d5e9e9c0d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Candles & Holders",
    "price": 1600
  },
  {
    "prod_id": "HD051",
    "name": "Rhea Sculpture",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Oak & Ember",
    "category": "Decorative Objects",
    "price": 1300
  },
  {
    "prod_id": "HD052",
    "name": "Sage Decorative Bowl",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Decorative Objects",
    "price": 1400
  },
  {
    "prod_id": "HD053",
    "name": "Iris Rattan Basket",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Storage & Trays",
    "price": 3150
  },
  {
    "prod_id": "HD054",
    "name": "Theo Catchall Tray",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Storage & Trays",
    "price": 3250
  },
  {
    "prod_id": "HD055",
    "name": "Lumi Square Mirror",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Mirrors",
    "price": 3600
  },
  {
    "prod_id": "HD056",
    "name": "Arden Organic Mirror",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Mirrors",
    "price": 3700
  },
  {
    "prod_id": "HD057",
    "name": "Ayla Wood Clock",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Clocks",
    "price": 3000
  },
  {
    "prod_id": "HD058",
    "name": "Moss Metal Clock",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Clocks",
    "price": 3150
  },
  {
    "prod_id": "HD059",
    "name": "Vera Salt Cellar",
    "description": "Wood home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Tabletop Decor",
    "price": 2200
  },
  {
    "prod_id": "HD060",
    "name": "Orion Placemat Set",
    "description": "Rustic home accent from Oak & Ember, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Oak & Ember",
    "category": "Tabletop Decor",
    "price": 2350
  },
  {
    "prod_id": "HD061",
    "name": "Classic Bud Vase",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Vases & Planters",
    "price": 3000
  },
  {
    "prod_id": "HD062",
    "name": "Luna Terracotta Pot",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Vases & Planters",
    "price": 3150
  },
  {
    "prod_id": "HD063",
    "name": "Sora Velvet Cushion",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Cushions & Throws",
    "price": 2400
  },
  {
    "prod_id": "HD064",
    "name": "Milo Fringe Throw",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Cushions & Throws",
    "price": 2500
  },
  {
    "prod_id": "HD065",
    "name": "Nora Sunburst Mirror",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Wall Decor",
    "price": 1800
  },
  {
    "prod_id": "HD066",
    "name": "Aster Canvas Artwork",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Wall Decor",
    "price": 1900
  },
  {
    "prod_id": "HD067",
    "name": "Mira Sculptural Lamp",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Lighting",
    "price": 6450
  },
  {
    "prod_id": "HD068",
    "name": "Cove Table Lamp",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Nord & Nook",
    "category": "Lighting",
    "price": 1900
  },
  {
    "prod_id": "HD069",
    "name": "Elio Scented Candle",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Candles & Holders",
    "price": 2050
  },
  {
    "prod_id": "HD070",
    "name": "Nova Candle Holder",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Candles & Holders",
    "price": 2200
  },
  {
    "prod_id": "HD071",
    "name": "Rhea Decorative Bowl",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Decorative Objects",
    "price": 4050
  },
  {
    "prod_id": "HD072",
    "name": "Sage Bookend",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Decorative Objects",
    "price": 4150
  },
  {
    "prod_id": "HD073",
    "name": "Iris Catchall Tray",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Storage & Trays",
    "price": 3200
  },
  {
    "prod_id": "HD074",
    "name": "Theo Storage Basket",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Storage & Trays",
    "price": 3300
  },
  {
    "prod_id": "HD075",
    "name": "Lumi Organic Mirror",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Mirrors",
    "price": 6300
  },
  {
    "prod_id": "HD076",
    "name": "Arden Full-Length Mirror",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Mirrors",
    "price": 6450
  },
  {
    "prod_id": "HD077",
    "name": "Ayla Metal Clock",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Clocks",
    "price": 2850
  },
  {
    "prod_id": "HD078",
    "name": "Moss Silent Clock",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Clocks",
    "price": 3000
  },
  {
    "prod_id": "HD079",
    "name": "Vera Placemat Set",
    "description": "Minimalist home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Tabletop Decor",
    "price": 1450
  },
  {
    "prod_id": "HD080",
    "name": "Orion Centerpiece",
    "description": "Scandinavian home accent from Nord & Nook, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Nord & Nook",
    "category": "Tabletop Decor",
    "price": 1600
  },
  {
    "prod_id": "HD081",
    "name": "Classic Terracotta Pot",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Vases & Planters",
    "price": 2400
  },
  {
    "prod_id": "HD082",
    "name": "Luna Glass Vase",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Vases & Planters",
    "price": 2550
  },
  {
    "prod_id": "HD083",
    "name": "Sora Fringe Throw",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Cushions & Throws",
    "price": 2650
  },
  {
    "prod_id": "HD084",
    "name": "Milo Cotton Cushion",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Cushions & Throws",
    "price": 2750
  },
  {
    "prod_id": "HD085",
    "name": "Nora Canvas Artwork",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Aria Living",
    "category": "Wall Decor",
    "price": 4500
  },
  {
    "prod_id": "HD086",
    "name": "Aster Abstract Wall Art",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Wall Decor",
    "price": 4650
  },
  {
    "prod_id": "HD087",
    "name": "Mira Table Lamp",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Lighting",
    "price": 4500
  },
  {
    "prod_id": "HD088",
    "name": "Cove Ceramic Lamp",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Lighting",
    "price": 4650
  },
  {
    "prod_id": "HD089",
    "name": "Elio Candle Holder",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1602874801006-e26d5e9e9c0d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Candles & Holders",
    "price": 2650
  },
  {
    "prod_id": "HD090",
    "name": "Nova Taper Holder",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Candles & Holders",
    "price": 2800
  },
  {
    "prod_id": "HD091",
    "name": "Rhea Bookend",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Decorative Objects",
    "price": 3150
  },
  {
    "prod_id": "HD092",
    "name": "Sage Ornament",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Decorative Objects",
    "price": 3300
  },
  {
    "prod_id": "HD093",
    "name": "Iris Storage Basket",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Storage & Trays",
    "price": 3200
  },
  {
    "prod_id": "HD094",
    "name": "Theo Decorative Box",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Storage & Trays",
    "price": 3350
  },
  {
    "prod_id": "HD095",
    "name": "Lumi Full-Length Mirror",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Mirrors",
    "price": 2750
  },
  {
    "prod_id": "HD096",
    "name": "Arden Beveled Mirror",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Mirrors",
    "price": 2900
  },
  {
    "prod_id": "HD097",
    "name": "Ayla Silent Clock",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Clocks",
    "price": 2700
  },
  {
    "prod_id": "HD098",
    "name": "Moss Arched Clock",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Clocks",
    "price": 2850
  },
  {
    "prod_id": "HD099",
    "name": "Vera Centerpiece",
    "description": "Modern home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Tabletop Decor",
    "price": 4200
  },
  {
    "prod_id": "HD100",
    "name": "Orion Coaster Set",
    "description": "Elegant home accent from Aria Living, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Aria Living",
    "category": "Tabletop Decor",
    "price": 850
  },
  {
    "prod_id": "HD101",
    "name": "Classic Glass Vase",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Vases & Planters",
    "price": 1800
  },
  {
    "prod_id": "HD102",
    "name": "Luna Sculptural Planter",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Terra Home",
    "category": "Vases & Planters",
    "price": 1950
  },
  {
    "prod_id": "HD103",
    "name": "Sora Cotton Cushion",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Cushions & Throws",
    "price": 2850
  },
  {
    "prod_id": "HD104",
    "name": "Milo Boucle Cushion",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Cushions & Throws",
    "price": 3000
  },
  {
    "prod_id": "HD105",
    "name": "Nora Abstract Wall Art",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Wall Decor",
    "price": 2950
  },
  {
    "prod_id": "HD106",
    "name": "Aster Arched Mirror",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Wall Decor",
    "price": 3100
  },
  {
    "prod_id": "HD107",
    "name": "Mira Ceramic Lamp",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Lighting",
    "price": 2550
  },
  {
    "prod_id": "HD108",
    "name": "Cove Pendant Light",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Lighting",
    "price": 2700
  },
  {
    "prod_id": "HD109",
    "name": "Elio Taper Holder",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Candles & Holders",
    "price": 1100
  },
  {
    "prod_id": "HD110",
    "name": "Nova Stone Candle",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1602874801006-e26d5e9e9c0d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Candles & Holders",
    "price": 1200
  },
  {
    "prod_id": "HD111",
    "name": "Rhea Ornament",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Decorative Objects",
    "price": 2300
  },
  {
    "prod_id": "HD112",
    "name": "Sage Figurine",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Decorative Objects",
    "price": 2450
  },
  {
    "prod_id": "HD113",
    "name": "Iris Decorative Box",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Storage & Trays",
    "price": 3250
  },
  {
    "prod_id": "HD114",
    "name": "Theo Desk Organizer",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Storage & Trays",
    "price": 3400
  },
  {
    "prod_id": "HD115",
    "name": "Lumi Beveled Mirror",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Mirrors",
    "price": 5500
  },
  {
    "prod_id": "HD116",
    "name": "Arden Sun Mirror",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Mirrors",
    "price": 5650
  },
  {
    "prod_id": "HD117",
    "name": "Ayla Arched Clock",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Clocks",
    "price": 2550
  },
  {
    "prod_id": "HD118",
    "name": "Moss Wall Clock",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Clocks",
    "price": 2650
  },
  {
    "prod_id": "HD119",
    "name": "Vera Coaster Set",
    "description": "Ceramic home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Terra Home",
    "category": "Tabletop Decor",
    "price": 3450
  },
  {
    "prod_id": "HD120",
    "name": "Orion Napkin Ring",
    "description": "Natural home accent from Terra Home, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Terra Home",
    "category": "Tabletop Decor",
    "price": 3550
  },
  {
    "prod_id": "HD121",
    "name": "Classic Sculptural Planter",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Vases & Planters",
    "price": 1200
  },
  {
    "prod_id": "HD122",
    "name": "Luna Ceramic Vase",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Vases & Planters",
    "price": 1350
  },
  {
    "prod_id": "HD123",
    "name": "Sora Boucle Cushion",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Cushions & Throws",
    "price": 3100
  },
  {
    "prod_id": "HD124",
    "name": "Milo Linen Cushion",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Cushions & Throws",
    "price": 750
  },
  {
    "prod_id": "HD125",
    "name": "Nora Arched Mirror",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Wall Decor",
    "price": 1400
  },
  {
    "prod_id": "HD126",
    "name": "Aster Woven Wall Basket",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Wall Decor",
    "price": 1550
  },
  {
    "prod_id": "HD127",
    "name": "Mira Pendant Light",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Lighting",
    "price": 5300
  },
  {
    "prod_id": "HD128",
    "name": "Cove Ambient Lamp",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Lighting",
    "price": 5400
  },
  {
    "prod_id": "HD129",
    "name": "Elio Stone Candle",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Candles & Holders",
    "price": 1700
  },
  {
    "prod_id": "HD130",
    "name": "Nova Glass Candle",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Candles & Holders",
    "price": 1800
  },
  {
    "prod_id": "HD131",
    "name": "Rhea Figurine",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Decorative Objects",
    "price": 1450
  },
  {
    "prod_id": "HD132",
    "name": "Sage Decorative Tray",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Decorative Objects",
    "price": 1600
  },
  {
    "prod_id": "HD133",
    "name": "Iris Desk Organizer",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Storage & Trays",
    "price": 3300
  },
  {
    "prod_id": "HD134",
    "name": "Theo Ottoman Basket",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Storage & Trays",
    "price": 3450
  },
  {
    "prod_id": "HD135",
    "name": "Lumi Sun Mirror",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Mirrors",
    "price": 8250
  },
  {
    "prod_id": "HD136",
    "name": "Arden Round Mirror",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Velvet & Vine",
    "category": "Mirrors",
    "price": 8400
  },
  {
    "prod_id": "HD137",
    "name": "Ayla Wall Clock",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Clocks",
    "price": 2350
  },
  {
    "prod_id": "HD138",
    "name": "Moss Desk Clock",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Clocks",
    "price": 2500
  },
  {
    "prod_id": "HD139",
    "name": "Vera Napkin Ring",
    "description": "Soft home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Tabletop Decor",
    "price": 2700
  },
  {
    "prod_id": "HD140",
    "name": "Orion Table Runner",
    "description": "Luxe home accent from Velvet & Vine, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Velvet & Vine",
    "category": "Tabletop Decor",
    "price": 2800
  },
  {
    "prod_id": "HD141",
    "name": "Classic Ceramic Vase",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Vases & Planters",
    "price": 3950
  },
  {
    "prod_id": "HD142",
    "name": "Luna Stoneware Planter",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Vases & Planters",
    "price": 4050
  },
  {
    "prod_id": "HD143",
    "name": "Sora Linen Cushion",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Cushions & Throws",
    "price": 850
  },
  {
    "prod_id": "HD144",
    "name": "Milo Textured Throw",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Cushions & Throws",
    "price": 1000
  },
  {
    "prod_id": "HD145",
    "name": "Nora Woven Wall Basket",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Wall Decor",
    "price": 4150
  },
  {
    "prod_id": "HD146",
    "name": "Aster Framed Print",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Wall Decor",
    "price": 4250
  },
  {
    "prod_id": "HD147",
    "name": "Mira Ambient Lamp",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Lighting",
    "price": 3350
  },
  {
    "prod_id": "HD148",
    "name": "Cove Floor Lamp",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Lighting",
    "price": 3450
  },
  {
    "prod_id": "HD149",
    "name": "Elio Glass Candle",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1602874801006-e26d5e9e9c0d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Candles & Holders",
    "price": 2250
  },
  {
    "prod_id": "HD150",
    "name": "Nova Brass Holder",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Candles & Holders",
    "price": 2400
  },
  {
    "prod_id": "HD151",
    "name": "Rhea Decorative Tray",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Decorative Objects",
    "price": 4200
  },
  {
    "prod_id": "HD152",
    "name": "Sage Stone Object",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Decorative Objects",
    "price": 4300
  },
  {
    "prod_id": "HD153",
    "name": "Iris Ottoman Basket",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Forma House",
    "category": "Storage & Trays",
    "price": 3350
  },
  {
    "prod_id": "HD154",
    "name": "Theo Wood Tray",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Storage & Trays",
    "price": 3450
  },
  {
    "prod_id": "HD155",
    "name": "Lumi Round Mirror",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Mirrors",
    "price": 4700
  },
  {
    "prod_id": "HD156",
    "name": "Arden Arched Mirror",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Mirrors",
    "price": 4800
  },
  {
    "prod_id": "HD157",
    "name": "Ayla Desk Clock",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Clocks",
    "price": 2200
  },
  {
    "prod_id": "HD158",
    "name": "Moss Minimal Clock",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Clocks",
    "price": 2350
  },
  {
    "prod_id": "HD159",
    "name": "Vera Table Runner",
    "description": "Modern home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Tabletop Decor",
    "price": 1900
  },
  {
    "prod_id": "HD160",
    "name": "Orion Fruit Bowl",
    "description": "Contemporary home accent from Forma House, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Forma House",
    "category": "Tabletop Decor",
    "price": 2050
  },
  {
    "prod_id": "HD161",
    "name": "Classic Stoneware Planter",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Vases & Planters",
    "price": 3300
  },
  {
    "prod_id": "HD162",
    "name": "Luna Ribbed Planter",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Vases & Planters",
    "price": 3450
  },
  {
    "prod_id": "HD163",
    "name": "Sora Textured Throw",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Cushions & Throws",
    "price": 1100
  },
  {
    "prod_id": "HD164",
    "name": "Milo Knitted Throw",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Cushions & Throws",
    "price": 1200
  },
  {
    "prod_id": "HD165",
    "name": "Nora Framed Print",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Wall Decor",
    "price": 2550
  },
  {
    "prod_id": "HD166",
    "name": "Aster Metal Wall Sculpture",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Wall Decor",
    "price": 2700
  },
  {
    "prod_id": "HD167",
    "name": "Mira Floor Lamp",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Lighting",
    "price": 6050
  },
  {
    "prod_id": "HD168",
    "name": "Cove Glass Lamp",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Lighting",
    "price": 6200
  },
  {
    "prod_id": "HD169",
    "name": "Elio Brass Holder",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Candles & Holders",
    "price": 700
  },
  {
    "prod_id": "HD170",
    "name": "Nova Ceramic Tealight",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1602874801006-e26d5e9e9c0d?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Willow & Co.",
    "category": "Candles & Holders",
    "price": 850
  },
  {
    "prod_id": "HD171",
    "name": "Rhea Stone Object",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Decorative Objects",
    "price": 3300
  },
  {
    "prod_id": "HD172",
    "name": "Sage Sculpture",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Decorative Objects",
    "price": 3450
  },
  {
    "prod_id": "HD173",
    "name": "Iris Wood Tray",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Storage & Trays",
    "price": 3350
  },
  {
    "prod_id": "HD174",
    "name": "Theo Rattan Basket",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Storage & Trays",
    "price": 800
  },
  {
    "prod_id": "HD175",
    "name": "Lumi Arched Mirror",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Mirrors",
    "price": 7400
  },
  {
    "prod_id": "HD176",
    "name": "Arden Square Mirror",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Mirrors",
    "price": 7550
  },
  {
    "prod_id": "HD177",
    "name": "Ayla Minimal Clock",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Clocks",
    "price": 2050
  },
  {
    "prod_id": "HD178",
    "name": "Moss Wood Clock",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Clocks",
    "price": 2200
  },
  {
    "prod_id": "HD179",
    "name": "Vera Fruit Bowl",
    "description": "Natural home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Tabletop Decor",
    "price": 1150
  },
  {
    "prod_id": "HD180",
    "name": "Orion Salt Cellar",
    "description": "Bohemian home accent from Willow & Co., designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Willow & Co.",
    "category": "Tabletop Decor",
    "price": 1300
  },
  {
    "prod_id": "HD181",
    "name": "Classic Ribbed Planter",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Vases & Planters",
    "price": 2700
  },
  {
    "prod_id": "HD182",
    "name": "Luna Bud Vase",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Vases & Planters",
    "price": 2850
  },
  {
    "prod_id": "HD183",
    "name": "Sora Knitted Throw",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600369671236-e74521d5b245?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Cushions & Throws",
    "price": 1300
  },
  {
    "prod_id": "HD184",
    "name": "Milo Velvet Cushion",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1583845112203-454c4a9e6399?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Cushions & Throws",
    "price": 1450
  },
  {
    "prod_id": "HD185",
    "name": "Nora Metal Wall Sculpture",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Wall Decor",
    "price": 5300
  },
  {
    "prod_id": "HD186",
    "name": "Aster Sunburst Mirror",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Wall Decor",
    "price": 5450
  },
  {
    "prod_id": "HD187",
    "name": "Mira Glass Lamp",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=82",
    "featured": true,
    "brand": "Atelier 9",
    "category": "Lighting",
    "price": 4100
  },
  {
    "prod_id": "HD188",
    "name": "Cove Sculptural Lamp",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Lighting",
    "price": 4250
  },
  {
    "prod_id": "HD189",
    "name": "Elio Ceramic Tealight",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1608181831718-c9d5f8e6a8b6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Candles & Holders",
    "price": 1300
  },
  {
    "prod_id": "HD190",
    "name": "Nova Scented Candle",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Candles & Holders",
    "price": 1450
  },
  {
    "prod_id": "HD191",
    "name": "Rhea Sculpture",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Decorative Objects",
    "price": 2450
  },
  {
    "prod_id": "HD192",
    "name": "Sage Decorative Bowl",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Decorative Objects",
    "price": 2600
  },
  {
    "prod_id": "HD193",
    "name": "Iris Rattan Basket",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Storage & Trays",
    "price": 3400
  },
  {
    "prod_id": "HD194",
    "name": "Theo Catchall Tray",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Storage & Trays",
    "price": 850
  },
  {
    "prod_id": "HD195",
    "name": "Lumi Square Mirror",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Mirrors",
    "price": 3850
  },
  {
    "prod_id": "HD196",
    "name": "Arden Organic Mirror",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Mirrors",
    "price": 4000
  },
  {
    "prod_id": "HD197",
    "name": "Ayla Wood Clock",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Clocks",
    "price": 1900
  },
  {
    "prod_id": "HD198",
    "name": "Moss Metal Clock",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Clocks",
    "price": 2050
  },
  {
    "prod_id": "HD199",
    "name": "Vera Salt Cellar",
    "description": "Elegant home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Tabletop Decor",
    "price": 3900
  },
  {
    "prod_id": "HD200",
    "name": "Orion Placemat Set",
    "description": "Artisan home accent from Atelier 9, designed to add warmth and character to everyday spaces.",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82",
    "featured": false,
    "brand": "Atelier 9",
    "category": "Tabletop Decor",
    "price": 4050
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Home decor dataset inserted successfully: ${products.length} products.`);
    console.log('Brands:', [...new Set(products.map(p => p.brand))].join(', '));
    console.log('Categories:', [...new Set(products.map(p => p.category))].join(', '));
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();

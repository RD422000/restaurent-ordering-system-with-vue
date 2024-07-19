const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schemas and Models
const DishSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const OrderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
  total: Number,
  status: String
});

const Dish = mongoose.model('Dish', DishSchema);
const Order = mongoose.model('Order', OrderSchema);

// Routes
app.get('/dishes', async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

app.post('/orders', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

app.get('/orders', async (req, res) => {
  const orders = await Order.find().populate('items');
  res.json(orders);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

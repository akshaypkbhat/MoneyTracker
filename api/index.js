const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transction = require('./models/Transaction.js');
const { default : mongoose }= require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('test os');
});

app.post('/api/transaction', async (req, res) => {

    await mongoose.connect(process.env.MONGO_URL)
    const {name, description, datetime} = req.body
    const transaction = await Transaction.create({name, description, datetime})
    res.json(transaction)
})

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const transactions = await Transaction.find()
    res.json(transactions)
})

app.listen(4040)
// 2QyzBcnF51Cf8veY
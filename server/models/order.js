const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema =  new Schema({
    name: String,
    productId: String,
    countOfProducts: Number,
    status: Boolean,
    telephoneNumber: Number,
    countOfMoney: Number
})

module.exports = mongoose.model('Order', orderSchema, 'orders')

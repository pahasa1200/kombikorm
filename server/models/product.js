const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema =  new Schema({
    name: String,
    cost: Number,
    countOfProducts: Number,
    description: String,
})

module.exports = mongoose.model('Product', productSchema, 'products')

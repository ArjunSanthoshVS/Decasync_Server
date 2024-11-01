const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = new Schema({
    itemNo: { type: String, unique: true },
    name: String,
    location: String,
    brand: String,
    category: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    stockUnit: String,
    unitPrice: Number,
    images: [String],
    status: { type: String, default: "Enabled" }
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item
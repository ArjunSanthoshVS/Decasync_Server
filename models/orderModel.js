const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderNo: { type: String, unique: true },
    orderDate: { type: Date, default: Date.now },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    itemTotal: Number,
    discount: Number,
    netAmount: Number,
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
        qty: Number,
        discount: Number
    }]
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
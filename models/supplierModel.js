const { default: mongoose } = require("mongoose");

const SupplierSchema = new mongoose.Schema({
    supplierNo: { type: String, unique: true },
    name: String,
    address: String,
    taxNo: String,
    country: String,
    mobile: String,
    email: String,
    status: { type: String, default: "Active" }
});

const Supplier = mongoose.model('Supplier', SupplierSchema)
module.exports = Supplier 
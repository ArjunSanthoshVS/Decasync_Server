const Supplier = require('../models/supplierModel');

const create = async (req, res) => {
    const { supplierNo, name, address, taxNo, country, mobile, email, status } = req.body;

    try {

        const newSupplier = new Supplier({
            supplierNo,
            name,
            address,
            taxNo,
            country,
            mobile,
            email,
            status,
        });

        await newSupplier.save();

        return res.status(201).json({
            error: false,
            message: "Supplier created successfully!"
        });

    } catch (error) {
        console.error("Error creating supplier:", error.message);
        return res.status(500).json({ error: true, message: "Failure in creating supplier!" });
    }
};

module.exports = { create };

const cloudinary = require('../config/cloudinary');
const Item = require("../models/itemModel");
const Supplier = require('../models/supplierModel');

const suppliers = async (req, res) => {
    try {
        const getSuppliers = await Supplier.find({ status: "Active" })
        return res.status(200).json({ error: false, suppliers: getSuppliers })
    } catch (error) {
        return res.status(500).json({ error: true })
    }
}

const items = async (req, res) => {
    try {
        const getItems = await Item.find()
        return res.status(200).json({ error: false, items: getItems })
    } catch (error) {
        return res.status(500).json({ error: true })
    }
}

const uploadImage = async (req, res) => {
    console.log(req.files);

    try {
        const imageUrls = [];

        for (const file of req.files) {
            // Convert buffer to base64
            const base64Image = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

            // Upload base64 image to Cloudinary
            const result = await cloudinary.uploader.upload(base64Image, {
                folder: 'item_images',
            });
            imageUrls.push(result.secure_url);
        }

        return res.status(200).json({ imageUrls });
    } catch (error) {
        return res.status(500).json({ message: "Failed to upload images", error });
    }
};

const create = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        return res.status(201).json({ message: "Item created successfully!", item: newItem });
    } catch (error) {
        return res.status(500).json({ message: "Failed to create item", error: error.message });
    }
};


module.exports = { suppliers, items, uploadImage, create }
const Order = require('../models/orderModel')

const orders = async (req, res) => {
    try {
        const orderList = await Order.find()
            .populate('supplier', 'name')
            .populate('items.item', 'name price');

        return res.status(200).json({ success: true, orders: orderList });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch orders" });
    }
}

const create = async (req, res) => {
    const { orderNo, orderDate, supplier, itemTotal, discount, netAmount, items } = req.body;

    try {
        const newOrder = new Order({
            orderNo,
            orderDate,
            supplier,
            itemTotal,
            discount,
            netAmount,
            items: items.map(item => ({
                item: item.itemId,
                qty: item.quantity,
                discount: item.discount || 0
            }))
        });

        await newOrder.save();
        return res.status(201).json({ success: true, message: "Order created successfully!" });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({ success: false, message: "Failed to create order." });
    }
};

module.exports = { orders, create };

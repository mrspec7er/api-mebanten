const {Shipping} = require("../models");

exports.index = async (req, res) => {

    const shpping = await Shipping.findAll();

    res.status(200).json({
        data: shpping
    })
}

exports.store = async (req, res) => {

    const {griya_id, banten_id, district_id, shipping_cost} = req.body
    
    try {
        const shipping = await Shipping.create({
            griya_id,
            banten_id,
            shipping_cost,
            district_id
        });
    
        res.status(200).json({
            data: shipping
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
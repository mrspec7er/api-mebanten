const {Banten, Banten_Options, Griya, Griya_Banten, Shipping, Address} = require("../models");
const {Op, QuertTypes} = require("sequelize");

exports.getAll = async (req, res) => {

    const {name, offset, limit} =  req.query

    const banten = await Griya_Banten.findAndCountAll({
        offset,
        limit,
        include: [{
            model: Banten,
            where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                
                }
        },
        Griya
    ]
    });

    res.status(200).json({
        data: banten
    })
}

exports.getOne = async (req, res) => {

    const {griya_id, banten_id} =  req.params

    const banten = await Griya_Banten.findOne({
        where: {
            griya_id,
            banten_id
        },
        include: [Griya, Banten]
    });

    res.status(200).json({
        data: banten
    })
}

exports.store = async (req, res) => {

    const {name, price, min_order_day, desc, img} = req.body
    
    const banten = await Banten.create({
        name,
        price,
        min_order_day,
        desc,
        img
    });

    res.status(200).json({
        data: banten
    })
}

exports.storeOption = async (req, res) => {

    const {name, price, banten_id} = req.body;
    
    const bantenOptions = await Banten_Options.create({
        name,
        price,
        banten_id
    });

    res.status(200).json({
        data: bantenOptions
    })
}

exports.getOptions = async (req, res) => {

    const {banten_id} =  req.params

    const bantenOptions = await Banten_Options.findAll({
        where: {
            banten_id
        }
    });

    res.status(200).json({
        data: bantenOptions
    })
}


// Delivery Controller

exports.deliveryGetAll = async (req, res) => {

    const {name, offset, limit} =  req.query;
    const {address_id} = req.params;

    const address = await Address.findOne({
        where: {
            id: address_id
        }
    });

    const district_id = address.district_id;

    const banten = await Griya_Banten.findAndCountAll({
        offset,
        limit,
        include: [{
            model: Shipping,
            where: {
                griya_id: {[Op.col]: 'Griya_Banten.griya_id'},
                banten_id: {[Op.col]: 'Griya_Banten.banten_id'},
                district_id
            }
        }, 
        {
            model: Banten,
            where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                
                }
        },
        Griya
    ]
    })

    res.status(200).json({
        data: banten
    })
}

exports.deliveryGetOne = async (req, res) => {

    const {address_id, banten_id, griya_id} = req.params;

    const address = await Address.findOne({
        where: {
            id: address_id
        }
    });

    const district_id = address.district_id;

    const banten = await Griya_Banten.findOne({
        where: {
            griya_id,
            banten_id
        },
        include: [{
            model: Shipping,
            where: {
                griya_id: {[Op.col]: 'Griya_Banten.griya_id'},
                banten_id: {[Op.col]: 'Griya_Banten.banten_id'},
                district_id
            }
        }, 
        Banten,
        Griya
    ]
    })

    res.status(200).json({
        data: banten
    })
}
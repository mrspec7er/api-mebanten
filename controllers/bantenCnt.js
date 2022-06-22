const {Banten_Upacara, Banten, Banten_Options, Banten_Option_Upacara, Griya,  Shipping, Address} = require("../models");
const {Op, QuertTypes} = require("sequelize");

exports.getAll = async (req, res) => {

    const {name, offset, limit} =  req.query;

    const {griya_id} = req.params;

    const banten = await Banten_Upacara.findAndCountAll({
        offset,
        limit,
        where: {
            griya_id,
            name:{
                [Op.iLike]: `%${name}%`
            }
        
        },
        include: [Griya]
    });

    res.status(200).json({
        data: banten
    })
}

exports.getOne = async (req, res) => {

    const {banten_id} =  req.params

    const banten = await Banten_Upacara.findOne({
        where: {
            id: banten_id
        },
        include: [Griya]
    });

    res.status(200).json({
        data: banten
    })
}

exports.store = async (req, res) => {

    const {name, price, min_order_day, desc, img, griya_id} = req.body
    
    const banten = await Banten_Upacara.create({
        name,
        price,
        min_order_day,
        desc,
        img,
        griya_id
    });

    res.status(200).json({
        data: banten
    })
}

exports.storeOption = async (req, res) => {

    const {name, price, banten_id} = req.body;
    
    const bantenOptions = await Banten_Option_Upacara.create({
        name,
        price,
        banten_id
    });

    res.status(200).json({
        data: bantenOptions
    })
}

exports.getOptions = async (req, res) => {

    const {banten_id} =  req.params;

    const bantenOptions = await Banten_Option_Upacara.findAll({
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
    const {user_id} = res.locals;

    const address = await Address.findOne({
        where: {
            id: address_id,
            user_id
        }
    });

    if (!address) {
        res.status(405).json({
            error: "User address undefine"
        })
    }

    const district_id = address.district_id;

    const banten = await Banten.findAndCountAll({
        offset,
        limit,
        where: {
            name:{
                [Op.iLike]: `%${name}%`
            }
        
        },
        include: [{
            model: Shipping,
            where: {
                // griya_id: {[Op.col]: 'Griya_Banten.griya_id'},
                // banten_id: {[Op.col]: 'Griya_Banten.banten_id'},
                district_id
            }
        }, 
        {
            model: Griya,
        }
    ]
    })

    res.status(200).json({
        data: banten
    })
}

exports.deliveryGetOne = async (req, res) => {

    const {address_id, banten_id} = req.params;
    const {user_id} = res.locals;

    const address = await Address.findOne({
        where: {
            id: address_id,
            user_id
        }
    });

    if (!address) {
        res.status(405).json({
            error: "User address undefine"
        })
    }

    const district_id = address.district_id;

    const banten = await Banten.findOne({
        where: {
            id: banten_id
        },
        include: [{
            model: Shipping,
            where: {
                // griya_id: {[Op.col]: 'Griya_Banten.griya_id'},
                // banten_id: {[Op.col]: 'Griya_Banten.banten_id'},
                district_id
            }
        }, 
        {
            model: Griya
        }
    ]
    })

    res.status(200).json({
        data: banten
    })
}

exports.deliveryStore = async (req, res) => {

    const {name, price, min_order_day, desc, img, griya_id} = req.body
    
    const banten = await Banten.create({
        name,
        price,
        min_order_day,
        desc,
        img,
        griya_id
    });

    res.status(200).json({
        data: banten
    })
}

exports.deliveryStoreOption = async (req, res) => {

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

exports.deliveryGetOptions = async (req, res) => {

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
const {Banten, Banten_Options, Griya} = require("../models");
const {Op, QuertTypes} = require("sequelize");

exports.getAll = async (req, res) => {

    const {name, offset, limit} =  req.query

    const banten = await Banten.findAndCountAll({
        where: {
            name:{
                [Op.iLike]: `%${name}%`
            }
        
        },
        offset,
        limit,
        include: [Griya]
    });

    res.status(200).json({
        data: banten
    })
}

exports.getOne = async (req, res) => {

    const {id} =  req.params

    const banten = await Banten.findOne({
        where: {
            id
        },
        include: [Griya]
    });

    res.status(200).json({
        data: banten
    })
}

exports.store = async (req, res) => {

    const {name, price, min_order_day, desc, img} = req.body

    console.log(req.body);
    
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
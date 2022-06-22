const {Griya} = require("../models");

exports.index = async (req, res) => {

    const {district_id} = req.params;
    const griya = await Griya.findAll({
        where: {
            district_id
        }
    });

    res.status(200).json({
        data: griya
    })
}

exports.store = async (req, res) => {

    const {name, desc, district_id} = req.body
    
    const griya = await Griya.create({
        name,
        desc,
        district_id
    });

    res.status(200).json({
        data: griya
    })
}
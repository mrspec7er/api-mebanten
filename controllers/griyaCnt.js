const {Griya, Griya_Banten} = require("../models");

exports.index = async (req, res) => {

    const griya = await Griya.findAll();

    res.status(200).json({
        data: griya
    })
}

exports.store = async (req, res) => {

    const {name, desc} = req.body
    
    const griya = await Griya.create({
        name,
        desc
    });

    res.status(200).json({
        data: griya
    })
}

exports.griyaBantens = async (req, res) => {

    const {griya_id, banten_id} = req.body

    
    const griyaBanten = await Griya_Banten.create({
        griya_id,
        banten_id
    });

    res.status(200).json({
        data: griyaBanten
    })
}
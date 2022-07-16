const {About} = require("../models");

exports.index = async (req, res) => {

    try {
        const about = await About.findAll({});

        res.status(200).json({
            data: about
        })
    } catch (err) {
        res.status(500).json({
            err: "Internal server Error"
        })
    }
}
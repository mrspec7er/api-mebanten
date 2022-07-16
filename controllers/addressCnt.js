const {Address, Province, Kecamatan, District} = require("../models");

exports.getProvince = async (req, res) => {

    const province = await Province.findAll();

    res.status(200).json({
        data: province
    })
}

exports.storeProvince = async (req, res) => {

    const {name} = req.body
    
    try {
        const province = await Province.create({
            name
        });
    
        res.status(200).json({
            data: province
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.getDistrict = async (req, res) => {

    const {province_id} = req.params

    const district = await District.findAll({
        where: {
            province_id
        }
    });

    res.status(200).json({
        data: district
    })
}

exports.storeDistrict = async (req, res) => {

    const {name, province_id} = req.body
    
    try {
        const district = await District.create({
            name, province_id
        });
    
        res.status(200).json({
            data: district
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.getKecamatan = async (req, res) => {

    const {district_id} = req.params

    const kecamatan = await Kecamatan.findAll({
        where: {
            district_id
        }
    });

    res.status(200).json({
        data: kecamatan
    })
}

exports.storeKecamatan = async (req, res) => {

    const {name, district_id} = req.body
    
    try {
        const kecamatan = await Kecamatan.create({
            name, district_id
        });
    
        res.status(200).json({
            data: kecamatan
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.storeAddress = async (req, res) => {

    const {address, province_id, district_id, kecamatan_id, phone} = req.body;
    const {user_id} = res.locals;
    
    try {
        const postAddress = await Address.create({
            user_id, address, province_id, district_id, kecamatan_id, phone
        });
    
        res.status(200).json({
            data: postAddress
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.updateAddress = async (req, res) => {

    const {address, province_id, district_id, kecamatan_id, phone, address_id} = req.body;
    const {user_id} = res.locals;
    
    try {

        const user_address = await Address.findOne({
            where: {
                id: address_id,
                user_id
            }
        })

        const updateAddress = await user_address.update({
            user_id, address, province_id, district_id, kecamatan_id, phone
        });
    
        res.status(200).json({
            data: updateAddress
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.deleteAddress = async (req, res) => {

    const {address_id} = req.params;
    const {user_id} = res.locals;
    
    try {

        const user_address = await Address.destroy({
            where: {
                id: address_id,
                user_id
            }
        })
    
        res.status(200).json({
            data: user_address
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

exports.getAddress = async (req, res) => {

    const {user_id} = res.locals;

    const address = await Address.findAll({
        where: {
            user_id
        },
        include: [Province, District, Kecamatan]
    });

    res.status(200).json({
        data: address
    })
}



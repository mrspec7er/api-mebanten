const {Cart, Cart_Option, Banten_Options} = require("../models");


exports.store = async (req, res) => {

    const user_id = 1;

    const {delivery, email, phone, name, banten_id, choices_date, banten_option} = req.body

    try {

        const cart = await Cart.create({
            delivery,
            user_id,
            email,
            phone,
            name,
            banten_id,
            choices_date,
        });
    
        if (!!banten_option) {
            const cartOptionsPromise = []
            banten_option.forEach(item => {
                cartOptionsPromise.push(
                    Cart_Option.create({
                        cart_id: cart.id,
                        options_id: item
                    })
                )
            })
    
            await Promise.all(cartOptionsPromise);
            
        }
    
        res.status(200).json({
            data: cart
        })
        
    } catch (err) {
        res.status(500).json({
            data: err
        })
    }
    
}

exports.getAll = async (req, res) => {

    const user_id = 1;

    const cart = await Cart.findAll({
        where: {
            user_id
        },
        include: [Banten_Options]
    });

    res.status(200).json({
        data: cart
    })
}

exports.getOne = async (req, res) => {

    const {id} = req.params

    const user_id = 1;

    const cart = await Cart.findOne({
        where: {
            user_id,
            id
        },
        include: [Banten_Options]
    });

    res.status(200).json({
        data: cart
    })
}
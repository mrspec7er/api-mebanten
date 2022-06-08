const {Cart, Cart_Option, Banten_Options, Banten, Griya, Address, Shipping} = require("../models");
const {Op, QuertTypes} = require("sequelize");


exports.store = async (req, res) => {

    const {user_id} = res.locals;

    const {delivery, email, phone, name, banten_id, griya_id, choices_date, banten_option} = req.body

    try {

        const banten = await Banten.findOne({
            where: {
                id: banten_id
            }
        });

        const totalOptionPrice = await getTotalOptions(banten_option);
        const total_price = banten.price + totalOptionPrice;

        const cart = await Cart.create({
            delivery,
            user_id,
            email,
            phone,
            name,
            banten_id,
            griya_id,
            choices_date,
            total_price,
            payment_status: "WAITING"
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

    const {user_id} = res.locals;
    const {payment_status} = req.query;

    const cart = await Cart.findAll({
        where: {
            user_id,
            payment_status:{
                [Op.iLike]: `%${payment_status}%`
            }
        },
        include: [Banten, Griya]
    });

    res.status(200).json({
        data: cart
    })
}

exports.getOne = async (req, res) => {

    const {id} = req.params

    const {user_id} = res.locals;

    try {
        const cart = await Cart.findOne({
            where: {
                user_id,
                id
            },
            include: [Banten_Options, Banten, Griya]
        });
    
        if (cart.delivery === true) {
            const shipping_cost = await getTotalShippingCost(cart.address_id, cart.griya_id, cart.banten_id);
           // const data = {...cart, shipping_cost}
    
            res.status(200).json({
                data: {
                    cart,
                    shipping_cost
                }
            })
        }
    
        res.status(200).json({
            data: cart
        })
    } catch (err) {

        res.status(200).json({
            error: err.mssage
        })
        
    }
}



//Delivery Order
exports.deliveryStore = async (req, res) => {

    const {user_id} = res.locals;

    const {delivery, email, phone, name, banten_id, griya_id, choices_date, banten_option, address_id} = req.body

    try {

        const banten = await Banten.findOne({
            where: {
                id: banten_id
            }
        });

        const totalOptionPrice = await getTotalOptions(banten_option);
        const totalShippingCost = await getTotalShippingCost(address_id, griya_id, banten_id);
        const total_price = banten.price + totalOptionPrice + totalShippingCost;


        const cart = await Cart.create({
            delivery,
            user_id,
            email,
            phone,
            name,
            banten_id,
            griya_id,
            choices_date,
            total_price,
            payment_status: "WAITING",
            address_id
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

//Utility Function

const getTotalOptions = async (id) => {
   
    const options = await Banten_Options.findAll({
        where: {
            id: {
                [Op.in]: id
            }
        }
    });

    //const totalPrice = options.reduce((a, b) => a.price + b.price);
    

    let totalPrice = 0

    options.forEach(item => {
        totalPrice += item.price
    })

    return totalPrice
}

const getTotalShippingCost = async (address_id, griya_id, banten_id) => {


    const address = await Address.findOne({
        where: {
            id: address_id
        }
    });
    
    const shipping = await Shipping.findOne({
        where: {
            banten_id: banten_id,
            griya_id: griya_id,
            district_id: address.district_id
        }
    });
    console.log("SHIPPING", shipping);
    

    return shipping.shipping_cost
}
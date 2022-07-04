const {Cart, Cart_Upacara} = require("../models");
const CryptoJS = require("crypto-js");
const axios = require("axios");
//const fetch = require("node-fetch");
// import fetch from "node-fetch";

// required cryptojs untuk enkripsi
// required node-fetch untuk request data

exports.directPayment = async (req, res) => {
    
    try {

        const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        const va              = "0000007860925290";
        // url api
        const url             = 'https://sandbox.ipaymu.com/api/v2/payment/direct';
        // request body, parameter sesuikan dengan dokumentasi api

        const {cart_id, payment_method, payment_chanel} = req.body;
        const {user_id} = res.locals;

        const cart = await Cart_Upacara.findOne({
            where: {
                id: cart_id,
                user_id
            }
        })


        const body = {
            "name": `${cart.name}`,
            "email": `${cart.email}`,
            "phone": `${cart.phone}`,
            "amount": `${cart.total_price}`,
            "notifyUrl": "https://api-mebanten.herokuapp.com/v1/payment-notify",
            "paymentMethod": `${payment_method}`,
            "paymentChannel": `${payment_chanel}`,
        };

        // generate signature
        const bodyEncrypt     = CryptoJS.SHA256(JSON.stringify(body));
        const stringtosign    = "POST:"+va+":"+bodyEncrypt+":"+apikey;
        const signature       = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey));

        
        // request
        axios(
            {
                url,
                method: "POST",
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json',
                    va: va,
                    signature: signature,
                    timestamp: '20150201121045'
                },
                data: JSON.stringify(body)
            }
        ).then(async (response) => {

            const cartData = await cart.update({
                transaction_id: response.data.Data.TransactionId,
                payment_status: "Pending",
                payment_status_code: 0,
                fee: response.data.Data.Fee,
                payment_date: response.data.Data.Expired
            })

            res.status(200).json({
                data: {
                    payment: response.data,
                    cartData
                }
            })

        }).catch(err => {

            res.status(500).json({
                error: err.message
            })

        })
        
    } catch (err) {

        res.status(500).json({
            error: err.message
        })

    }

}

exports.paymentStatus = async (req, res) => {
    
    try {

        const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        const va              = "0000007860925290";
        // url api
        const url             = 'https://sandbox.ipaymu.com/api/v2/transaction';
        // request body, parameter sesuikan dengan dokumentasi api

        const {transaction_id} = req.body;
        const {user_id} = res.locals;


        const body = {
            "transactionId": transaction_id
        };

        // generate signature
        const bodyEncrypt     = CryptoJS.SHA256(JSON.stringify(body));
        const stringtosign    = "POST:"+va+":"+bodyEncrypt+":"+apikey;
        const signature       = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey));

        
        // request
        axios(
            {
                url,
                method: "POST",
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json',
                    va: va,
                    signature: signature,
                    timestamp: '20150201121045'
                },
                data: JSON.stringify(body)
            }
        ).then((response) => {

            res.status(200).json({
                data: response.data
            })

        }).catch(err => {

            res.status(500).json({
                error: err.message
            })

        })
        
    } catch (err) {

        res.status(500).json({
            error: err.message
        })
        
    }

}

exports.paymentNotify = async (req, res) => {
    try {

        console.log("BODY : ", req.body);
        console.log("QUERY : ", req.query);
        console.log("PARAMS : ", req.params);

        res.status(200).json({
            data: {
                body: req.body,
                query: req.query,
                params: req.params
            }
        })
        
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
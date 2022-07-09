const {Cart, Cart_Upacara} = require("../models");
const CryptoJS = require("crypto-js");
const axios = require("axios");


const apikey = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
const va = "0000007860925290";
// url api
const url = 'https://sandbox.ipaymu.com/api/v2/payment/direct';
const urlPaymentStatus = 'https://sandbox.ipaymu.com/api/v2/transaction';
// request body, parameter sesuikan dengan dokumentasi api


const BaseURL = "https://node-http-module-production-b8ad.up.railway.app";

exports.directPayment = async (req, res) => {
    
    try {

        // const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        // const va              = "0000007860925290";
        // // url api
        // const url             = 'https://sandbox.ipaymu.com/api/v2/payment/direct';
        // // request body, parameter sesuikan dengan dokumentasi api

        const notifyUrl = `${BaseURL}/v1/payment-notify`

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
            "notifyUrl": notifyUrl,
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

            await cart.update({
                transaction_id: response.data.Data.TransactionId,
                payment_status: "Pending",
                payment_status_code: 0,
                fee: response.data.Data.Fee,
                payment_date: response.data.Data.Expired
            })

            let payment = response.data;

            //hiding transaction_id

            //payment.Data.TransactionId = 001101000011000000110011

            payment.Data.SessionId = 001101000011000000110011

            res.status(200).json({
                data: payment
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

        // const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        // const va              = "0000007860925290";
        // // url api
        // const url             = 'https://sandbox.ipaymu.com/api/v2/transaction';
        // // request body, parameter sesuikan dengan dokumentasi api

        const {transaction_id} = req.body;


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
                urlPaymentStatus,
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

        });
        
    } catch (err) {

        res.status(500).json({
            error: err.message
        })
        
    }

}

exports.paymentNotify = async (req, res) => {

    try {

        const {trx_id, status_code} = req.body;

        // const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        // const va              = "0000007860925290";
        // // url api
        // const url             = 'https://sandbox.ipaymu.com/api/v2/transaction';
        // // request body, parameter sesuikan dengan dokumentasi api


        const body = {
            "transactionId": trx_id
        };

        // generate signature
        const bodyEncrypt     = CryptoJS.SHA256(JSON.stringify(body));
        const stringtosign    = "POST:"+va+":"+bodyEncrypt+":"+apikey;
        const signature       = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey));

        
        if (status_code === '1') {


            axios(
                {
                    urlPaymentStatus,
                    method: "POST",
                    headers: {
                        Accept: 'application/json', 'Content-Type': 'application/json',
                        va: va,
                        signature: signature,
                        timestamp: '20150201121045'
                    },
                    data: JSON.stringify(body)
                }
            ).then( async (response) => {

                const cart = await Cart_Upacara.findOne({
                    where: {
                        transaction_id: trx_id
                    }
                });
                
                await cart.update({
                    payment_status: response.data.Data.StatusDesc,
                    payment_status_code: response.data.Data.Status
                });

                res.end();
    
            }).catch(err => {
    
                console.log(err.message);
    
            });

        }

        else {

            const err = {
                message : "Payment Fail"
            }
    
            console.log(err);
        }

    } catch (err) {
        console.log(err.message);
    }
}

// Delivery Order

exports.deliveryDirectPayment = async (req, res) => {
    
    try {

        // const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        // const va              = "0000007860925290";
        // // url api
        // const url             = 'https://sandbox.ipaymu.com/api/v2/payment/direct';
        // // request body, parameter sesuikan dengan dokumentasi api

        const deliveryNotifyUrl = `${BaseURL}/v1/delivery-payment-notify`

        const {cart_id, payment_method, payment_chanel} = req.body;
        const {user_id} = res.locals;

        const cart = await Cart.findOne({
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
            "notifyUrl": deliveryNotifyUrl,
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

            await cart.update({
                transaction_id: response.data.Data.TransactionId,
                payment_status: "Pending",
                payment_status_code: 0,
                fee: response.data.Data.Fee,
                payment_date: response.data.Data.Expired
            })

            let payment = response.data;

            //hiding transaction_id

            //payment.Data.TransactionId = 001101000011000000110011

            payment.Data.SessionId = 001101000011000000110011

            res.status(200).json({
                data: payment
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

exports.deliveryPaymentNotify = async (req, res) => {

    try {

        const {trx_id, status_code} = req.body;

        // const apikey          = "SANDBOXDF9BD69B-AD3C-44E6-855C-17BC479A768D-20220624131433";
        // const va              = "0000007860925290";
        // // url api
        // const urlPaymentStatus             = 'https://sandbox.ipaymu.com/api/v2/transaction';
        // // request body, parameter sesuikan dengan dokumentasi api


        const body = {
            "transactionId": trx_id
        };

        // generate signature
        const bodyEncrypt     = CryptoJS.SHA256(JSON.stringify(body));
        const stringtosign    = "POST:"+va+":"+bodyEncrypt+":"+apikey;
        const signature       = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey));

        
        if (status_code === '1') {


            axios(
                {
                    urlPaymentStatus,
                    method: "POST",
                    headers: {
                        Accept: 'application/json', 'Content-Type': 'application/json',
                        va: va,
                        signature: signature,
                        timestamp: '20150201121045'
                    },
                    data: JSON.stringify(body)
                }
            ).then( async (response) => {

                const cart = await Cart.findOne({
                    where: {
                        transaction_id: trx_id
                    }
                });
                
                await cart.update({
                    payment_status: response.data.Data.StatusDesc,
                    payment_status_code: response.data.Data.Status
                });

                res.end();
    
            }).catch(err => {
    
                console.log(err.message);
    
            });

        }

        else {

            const err = {
                message : "Payment Fail"
            }
    
            console.log(err);
        }

    } catch (err) {
        console.log(err.message);
    }
}
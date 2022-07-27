const bantenRouter = require("./bantenRtr");
const griyaRouter = require("./griyaRtr");
const cartRouter = require("./cartRtr");
const authRouter = require("./authRtr");
const addressRouter = require("./addressRtr");
const shippingRouter = require("./shippingRtr");
const paymentRouter = require("./paymentRtr");
const aboutRouter = require("./aboutRtr");
const pingRouter = require("./ping")


function routes(app) {
    app.use(bantenRouter);
    app.use(griyaRouter);
    app.use(cartRouter);
    app.use(authRouter);
    app.use(addressRouter);
    app.use(shippingRouter);
    app.use(paymentRouter);
    app.use(aboutRouter);
    app.use(pingRouter)


    app.all("*", (req, res) => {
        return res.status(404).json({
            message: "Not Found",
            data: {},
            errors: {},
        });
    });
    
}

module.exports = routes
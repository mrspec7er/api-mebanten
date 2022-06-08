const bantenRouter = require("./bantenRtr");
const griyaRouter = require("./griyaRtr");
const cartRouter = require("./cartRtr");
const authRouter = require("./authRtr");
const addressRouter = require("./addressRtr");
const shippingRouter = require("./shippingRtr");


function routes(app) {
    app.use(bantenRouter);
    app.use(griyaRouter);
    app.use(cartRouter);
    app.use(authRouter);
    app.use(addressRouter);
    app.use(shippingRouter);


    app.all("*", (req, res) => {
        return res.status(404).json({
            message: "Not Found",
            data: {},
            errors: {},
        });
    });
    
}

module.exports = routes
const bantenRouter = require("./bantenRtr");
const griyaRouter = require("./griyaRtr");
const cartRouter = require("./cartRtr");


function routes(app) {
    app.use(bantenRouter);
    app.use(griyaRouter);
    app.use(cartRouter);


    app.all("*", (req, res) => {
        return res.status(404).json({
            message: "Not Found",
            data: {},
            errors: {},
        });
    });
    
}

module.exports = routes
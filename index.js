const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");


const app = express();

const {PORT = 8000} = process.env;

app.use(morgan('tiny'));
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dotenv.config();

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
})

const express = require("express");
const connectDB = require("./config/connectDB");
const routes = require("./routes/usersRoutes")

const app = express();

app.use(express.json());

require("dotenv").config();

connectDB();

app.use("/api/usersList", routes);

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`this server is running on ${PORT}`);
})

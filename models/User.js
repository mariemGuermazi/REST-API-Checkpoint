const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: Number
});

module.exports = User = model("user", userSchema);
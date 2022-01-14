const { send } = require("express/lib/response");
const User = require("../models/User")


//GET :  RETURN ALL USERS 

exports.getAllUsers = async (req, res) => {
    try{
        const Users = await User.find();
        res.status(200).send({message: "get all users", Users});
    }
    catch(err){
        res.status(500).send(err);
    }
};

//ADD A NEW USER TO THE DATABASE 
exports.addUser = async(req, res) =>{
    try{
        const findUser = await User.findOne({email : req.body.email});
        if (findUser){
            return res.status(400).send({message : "email already used"});
        }
        const newUser = new User(req.body);
        await newUser.save({message : "new user added", newUser});
    }
    catch(err){
        res.status(500).send(err);
    }
};


//EDIT A USER BY ID 

exports.editUserById = async(req, res) =>{
    const id = req.params.id;
    try{
        const editUser = await User.findByIdAndUpdate({_id: id}, {$set :{...req.body}});
        res.status(200).send({message: "User updated", editUser})
    }
    catch(err){
        res.status(500).send(err);
    }
};

//REMOVE A USER BY ID 

exports.removeUserById = async(req, res) => {
    const id = req.params.id;
    try{
        await User.findByIdAndRemove({_id: id})
        res.status(200).send({message: "User removed"});
    }
    catch(err){
        res.status(500).send(err);
    }
}
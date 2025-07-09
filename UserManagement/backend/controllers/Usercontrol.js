const User = require("../models/Usermodel");

// GET all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }

    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error fetching users" });
  }
};

// POST: Add a user
const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  try {
    const users = new User({ name, gmail, age, address });
    await users.save();

    return res.status(201).json({ message: "User added successfully", users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add user" });
  }
};

const getById = async (req,res,next) => {
    const id = req.params.id;
    let user
    try {
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }
    // not available users
    if (!user) {
        return res.status(404).json({ message : "User not found"}); 
    }
    return res.status(200).json({user});
}

const updateUser = async (req,res,next) => {
    const id = req.params.id;
    const {name,gmail,age,address} = req.body;
    let users
    try {
        users = await User.findByIdAndUpdate(id, { name, gmail, age, address }, { new: true });
    }catch(err){
        console.log(err);
    }
    if(!users) {
        return res.status(404).json({ message: "Unable to update user details" });
    }
    return res.status(200).json({ users});
};

//Delete User Details//
const deleteUser = async (req,res,next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }catch(err) {
        console.log(err);
    }
    if(!user) {
        return res.status(404).json({ message: "Unable to delete user details" });
    }
     return res.status(200).json({ user});
};


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
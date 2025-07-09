const Deathaid = require("../Model/DeathaidModel");

//Display all the data part
const getAllDetails = async (req,res,next)=>{
    //check data is available or not
    let deathaid; //variable declaration

    try{
        deathaid = await Deathaid.find();
    }
    catch(error){
        console.log(error);
    }
    //Not found
    if(!deathaid){
        return res.status(404).json({message:"No data found"});

    }

    //Display the data
    return res.status(200).json({deathaid});
};

//Data Insertion part

const addDetails = async (req,res,next)=>{
    const {member_id,name,month,amount,Total} = req.body;

    let deathaid; //variable declaration
    try{
        deathaid = new Deathaid({member_id,name,month,amount,Total});
        await deathaid.save();
    }
    catch(error){
        console.log(error);
    }
    //Not insert data
    if (!deathaid){
        return res.status(404).json({message:"Unable to add details"});
    }

    return res.status(200).json({deathaid});

}


//Get by ID
const getById = async (req,res,next)=>{
    const id = req.params.id;
    let deathaid;

    try{
        deathaid = await Deathaid.findById(id);
    }
    catch(error){
        console.log(error);
    }
    //Not found
    if(!deathaid){
        return res.status(404).json({message:"No Details found"});
    }

    //Display the data
    return res.status(200).json({deathaid});
}

//Update by ID
const updateById = async (req,res,next)=>{
    const id = req.params.id;
    const {member_id,name,month,amount,Total} = req.body;

    let deathaid;
    try{
        deathaid = await Deathaid.findByIdAndUpdate(id,{member_id,name,month,amount,Total});
        //"findByIdAndUpdate" method is used to update the data by id
        deathaid = await deathaid.save();
    }
    catch(error){
        console.log(error);
    }
    //Not found
    if(!deathaid){
        return res.status(404).json({message:"Unable to update details"});
    }

    //Display the data
    return res.status(200).json({deathaid});
}

//Delete by ID
const deleteById = async (req,res,next)=>{
    const id = req.params.id;
    let deathaid;

    try{
        deathaid = await Deathaid.findByIdAndDelete(id);
    }
    catch(error){
        console.log(error);
    }
    //Not found
    if(!deathaid){
        return res.status(404).json({message:"Unable to delete details"});
    }

    //Display the data
    return res.status(200).json({message:"Details deleted successfully"});
}   


exports.getAllDetails = getAllDetails;
exports.addDetails = addDetails;
exports.getById = getById;
exports.updateById = updateById;
exports.deleteById = deleteById;








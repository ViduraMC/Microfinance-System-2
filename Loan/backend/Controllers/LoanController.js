const Loan = require("../Model/LoanModel");

const getAllLoans = async(req, res, next) => {

    let loans;

    try{
        loans = await Loan.find();
    }catch (err){
        console.log(err);
    }
    //not found
    if(!loans){
        return res.status(404).json({message:"User not found"})
    }
    // Display all users
    return res.status(200).json({loans});
};

//data insert

const addLoan = async (req, res, next) => {
    const {type, amount, interest_rate} = req.body;
    
    let loans;

    try{
        loans = new Loan({type, amount, interest_rate});
        await loans.save();
    }catch (err){
        console.log(err);
    }
    //not found
if(!loans){
return res.status(500).json({message:"Unable to add loan"})          
}
return res.status(200).json({loans});
};

const getById = async (req, res, next) => {

    const id = req.params.id;

    let loan;

    try{
        loan = await Loan.findById(id);
    } catch(err){
        console.log(err);
    }

    if(!loan){
return res.status(500).json({message:"User not found"})          
}
return res.status(200).json({loan});
};

//Update 

const  updateLoan = async (req, res, next) => {
    const id = req.params.id;

    const {type, amount, interest_rate} = req.body;

    let loan;

    try{
        loan = await Loan.findByIdAndUpdate(id, 
            {type, amount, interest_rate});
            loan = await loan.save();
        }catch(err){
        console.log(err);
    }
        if(!loan){
return res.status(500).json({message:"Unable to update"})          
}
return res.status(200).json({loan});
};

//Delete

const deleteLoan = async (req, res, next) => {
    const id = req.params.id;

    let loan;

    try{
        loan = await Loan.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!loan){
return res.status(500).json({message:"Unable  to delete loan"})          
}
return res.status(200).json({loan});
};
    


exports.getAllLoans = getAllLoans;
exports.addLoan = addLoan;
exports.getById = getById;
exports.updateLoan = updateLoan;
exports.deleteLoan = deleteLoan;
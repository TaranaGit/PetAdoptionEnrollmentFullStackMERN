const express = require('express');
const router = express.Router();
const adopter = require('../database/dbModel');
const { default: mongoose } = require('mongoose');

//Get method
router.get('/', async(req, res)=>{
    try{
        const fetchData = await adopter.find();
       return res.send(fetchData);  
    }   
    catch(err){
        res.status(500).send(err);
    }
  
})

// Get a single item's information

router.get('/:adopter_id', async(req,res)=>{
    const {adopter_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(adopter_id)){
        return res.status(400).json({message:"Invalid adopter ID"})
    }
    try{
        const fetchData = await adopter.findById(adopter_id);
        return res.send(fetchData)
    }
    catch(err){
        res.status(500).send(err);
    }
})

//Post method
router.post('/', async(req,res)=>{
    const{ fullname,email,address,contact, preferredPetType,homeType,availability,experience} = req.body;

    try{
        const newEntry = new adopter({
            fullname,email,address,contact, preferredPetType,homeType,availability,experience
        })
        await newEntry.save();
        return res.json(newEntry);
    }
    catch(error){
        return res.status(500).send(error)
    }
})
// update method
router.put('/:adopter_id', async (req, res) => {
    const { adopter_id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(adopter_id)) {
        return res.status(400).json({ message: "Invalid adopter ID" });
    }

    try {
        const updatedUser = await adopter.findByIdAndUpdate(
            adopter_id,  // No need for mongoose.Types.ObjectId conversion here
            { $set: req.body }, 
            { new: true, runValidators: true } // runValidators ensures data validity
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Update error:", error);  // Log the actual error for debugging
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
});
// Delete method
router.delete('/:adopter_id', async(req,res)=>{
    const {adopter_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(adopter_id)){
        return res.status(400).json({message:"Invalid adopter ID"})
    }
    try{
        const deleteUser = await adopter.findByIdAndDelete(adopter_id);
        if(!deleteUser){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch(error){
        console.error("delete error:", error);  // Log the actual error for debugging
        res.status(500).json({ message: 'Error deleting  user', error: error.message });
    }
})

module.exports = router;


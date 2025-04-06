const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    address: {type:String},
    contact: {type:Number},
    preferredPetType:{type:String},
    homeType:{type:String},
    availability:{type:String},
    experience:{type:String}
})

const adopter = mongoose.model('Adopter', userSchema)  // here 'Adopter will the Table name'
module.exports = adopter;























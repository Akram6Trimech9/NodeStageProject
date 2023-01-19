
const mongoose = require("mongoose");
const CandidatureModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codeCandidate:  {type:mongoose.Schema.Types.ObjectId,ref:'condidate'}   , 
    codeStage:  {type:mongoose.Schema.Types.ObjectId,ref:'stage'}   , 
},{
timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


module.exports = mongoose.model('candidature', CandidatureModel);

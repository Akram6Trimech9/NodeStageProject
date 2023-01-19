 const mongoose = require("mongoose");
const condidature = require("./condidature");

const CondidateModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
     niveau: {type: String,enum: ['licence', 'ing','master']  }  , 
  nom:{type:String ,required:true}, 
  prenom:{type:String ,required:true}, 
  faculte: { type: String, required: true }, 
  candidature:[{type:mongoose.Schema.Types.ObjectId,ref:'candidature'}] 
});


module.exports = mongoose.model('candidate', CondidateModel);

const mongoose = require("mongoose");

const StageModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
     niveau: {type: String,
         enum: ['licence', 'master','ing']  }  , 
    periodeStage:{
          dateDeb:{ type:Date, required:true} , 
        dateFin:{ type:Date, required:true},
    },

    annee:{ type:String, required:true},
    condidature:[{type:mongoose.Schema.Types.ObjectId,ref:'candidature'}] 

});
module.exports = mongoose.model('stage', StageModel);
const Condidaturemodel=require('../models/condidature')
 const mongoose=require('mongoose')
 exports.postCandidature=(req,res)=>{ 

       const newCand= new  Condidaturemodel({ 
        _id: new mongoose.Types.ObjectId(),
        codeCandidate:req.params.codeCandidate, 
        CodeStage:req.params.CodeStage
       })
      newCand.save()
        .then(cadidature=>{ 
              if(cadidature){ 
                return res.status(201).json({message:'Candidature Created',cadidature})
              }else{ 
                 return res.status(401).json({message:'something went wrong'})
              }
        })
        .catch(err=>{ 
            return res.status(500).json(err)
        })
 }
exports.modifcandidature=async(req,res)=>{ 
         try {
            const condidature = await Condidaturemodel.findById(req.params.id);
            if(condidature){
                Object.keys(req.body).forEach(element=>{
                    condidature[element]=req.body[element];
                })
                condidature.save().then(Candidature_updated=>{
                    Candidature_updated && res.status(200).json(Candidature_updated);
                    !Candidature_updated && res.status(400).json({message:'something went wrong'});
                }).catch(err=>{
                    return res.status(500).json(err);
    
                })
            }
            else {
                return res.status(404).json({message:'Candidature_updated not found'});
            }
        }
        catch(err){
            return res.status(500).json(err);
        }
    }
exports.GetCondidatureBystage= async(req,res)=>{ 
     try{    
         const condidature=await  Condidaturemodel.find()
         const condidatateBstage=[]
         condidature.forEach(item=>{ 
                 if(item.codeStage == req.params.codeStage  )  {  
                    condidatateBstage.push(item)
                 }         
         })
        if(condidatateBstage.length >  0 ){ 
              return res.status(200).json(condidatateBstage)
        }else{ 
             return res.status(401).json('there is no candidature in related with this stage ')
        }

}catch(err){ 
      return res.status(500).json(err)
}
}
exports.getAllcandidature=(req,res)=>{ 
    Condidaturemodel.find()
      .exec()
        .then(result => { 
              if(result){ 
                 return res.status(200).json(result)
              }else{ 
                 return res.status(401).json({message:'something went wrong'})
              }
        })
        .catch(err=>{ 
             return res.status(500).json(err)
        })    
}
exports.listStageByCandidate=async(req,res)=>{ 
    try{ 
  const  liststage=[]
   const condidats=await Condidaturemodel.find().populate('stage')
    if(condidats.length > 0){ 
          condidats.forEach(item=>{ 
            if(item.codeCandidate==req.params.codeCandidate){ 
              liststage.push(item)
            }
          })
             return res.status(200).json(liststage)
        }else{ 
            return res.status(401).json({message:'there is a probleme there '})
        }

}catch(err){ 
   return res.status(500).json(err)
    }
}
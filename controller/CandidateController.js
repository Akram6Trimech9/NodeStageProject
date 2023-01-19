const candidatemodel=require('../models/condidat')
const mongoose=require('mongoose')


exports.postecandidate=(req,res)=>{ 
    const candidate= new  candidatemodel({ 
     _id: new mongoose.Types.ObjectId(),
     niveau: req.body.niveau,
     nom:req.body.nom , 
     prenom:req.body.prenom,
     faculte:req.body.faculte
     })
     candidate.save()
     .then(candidate=>{ 
           if(candidate){ 
             return res.status(201).json({message:'candidate Created',candidate})
           }else{ 
              return res.status(401).json({message:'something went wrong'})
           }
     })
     .catch(err=>{ 
         return res.status(500).json(err)
     })
}
exports.getCondidates=(req,res)=>{ 
   candidatemodel.find()
     .exec()
      .then(result=>{ 
            if(result){ 
                 return res.status(200).json(result)
            }else{
                 return res.status(401).json({message:'something went wrong'})
            }
      })
      .catch(err=>{ 
          res.status(500).json(err)
      }) 
}
 
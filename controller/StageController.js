const StageModel=require('../models/stage')
 const mongoose=require('mongoose')

 exports.postStage=(req,res)=>{ 
       const Stage= new  StageModel({ 
        _id: new mongoose.Types.ObjectId(),
        niveau: req.body.niveau,
         periodeStage:{
             dateDeb:req.body.dateDeb , 
           dateFin:req.body.dateFin,
       },
       annee :req.body.annee
       })
       Stage.save()
        .then(Stage=>{ 
              if(Stage){ 
                return res.status(201).json({message:'Stage Created',Stage})
              }else{ 
                 return res.status(401).json({message:'something went wrong'})
              }
        })
        .catch(err=>{ 
            return res.status(500).json(err)
        })
 }

 exports.getStageByyear=async (req,res)=>{ 
    const year =  await req.params.year 
    console.log(year)
    const stages=  await  StageModel.find()
    const filtredtable=[]
    stages.forEach(item=>{ 
            if(item.annee==year){ 
            filtredtable.push(item)
            console.log(item,'ok')
           }
      })
     if(filtredtable){
        console.log(filtredtable)
          return res.status(200).json(filtredtable)
     }             
 }
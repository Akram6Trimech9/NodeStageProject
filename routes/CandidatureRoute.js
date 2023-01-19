const router = require("express").Router()
const CandidatureController = require("../controller/CandidatureController");
router.post("/:codeCandidate/:CodeStage", CandidatureController.postCandidature);
router.get("/all",CandidatureController.getAllcandidature)
router.get("/:codeStage/condidates",CandidatureController.GetCondidatureBystage)
router.get("/:codeCandidate/stages",CandidatureController.listStageByCandidate)

  module.exports   = router;    

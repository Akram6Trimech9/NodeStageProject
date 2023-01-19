const router = require("express").Router()
 const CandidateController = require("../controller/CandidateController");

router.post("/", CandidateController.postecandidate);
router.get('/',CandidateController.getCondidates)
module.exports   = router;    

const router = require("express").Router()
 const StageController = require("../controller/StageController");

// router.get("/:id",,calendarController.getCalendar);
router.post("/", StageController.postStage);
// router.patch("/:id",authentication,calendarController.updateCalendar);
// router.delete("/:id",authentication,calendarController.deleteCalendar);
router.get('/:year',StageController.getStageByyear)
module.exports   = router;    

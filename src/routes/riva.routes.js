const { Router } = require("express");
const { getRiva, createRiva } = require("../controllers/riva.controller");
const router = Router();

router.get("/riva", getRiva);
router.post("/riva", createRiva);

module.exports = router;

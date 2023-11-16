const { Router } = require("express");
const {
  getMoreno,
  createMoreno,
} = require("../controllers/moreno.controller.js");
const router = Router();

router.get("/moreno", getMoreno);
router.post("/moreno", createMoreno);

module.exports = router;

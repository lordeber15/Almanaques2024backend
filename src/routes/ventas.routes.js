const { Router } = require("express");
const {
  getVentas,
  createVentas,
} = require("../controllers/ventas.controller.js");
const router = Router();

router.get("/ventas", getVentas);
router.post("/ventas", createVentas);

module.exports = router;

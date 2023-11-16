const { Ventas } = require("../models/ventas");

const getVentas = async (req, res) => {
  try {
    const getVentas = await Ventas.findAll();
    res.json(getVentas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createVentas = async (req, res) => {
  try {
    const { egreso, monto } = req.body;
    const newVentas = await Ventas.create({
      egreso,
      monto,
    });
    res.json(newVentas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getVentas, createVentas };

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
    const { cliente, cantidad, modelo, detalles, precio } = req.body;
    const newVentas = await Ventas.create({
      cliente,
      cantidad,
      modelo,
      detalles,
      precio,
    });
    res.json(newVentas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getVentas, createVentas };

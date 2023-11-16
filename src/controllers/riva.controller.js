const { Riva } = require("../models/riva");

const getRiva = async (req, res) => {
  try {
    const getRiva = await Riva.findAll();
    res.json(getRiva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createRiva = async (req, res) => {
  try {
    const { modelo, stock, precio } = req.body;
    const newRiva = await Riva.create({
      modelo,
      stock,
      precio,
    });
    res.json(newRiva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getRiva, createRiva };

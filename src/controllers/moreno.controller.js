const { Moreno } = require("../models/moreno");

const getMoreno = async (req, res) => {
  try {
    const getMorenos = await Moreno.findAll();
    res.json(getMorenos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createMoreno = async (req, res) => {
  try {
    const { modelo, stock, precio } = req.body;
    const newMoreno = await Moreno.create({
      modelo,
      stock,
      precio,
    });
    res.json(newMoreno);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getMoreno, createMoreno };

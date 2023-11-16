const express = require("express");
const morenoRoutes = require("./routes/moreno.routes");
const ventasRoutes = require("./routes/ventas.routes");
const rivaRoutes = require("./routes/riva.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morenoRoutes);
app.use(ventasRoutes);
app.use(rivaRoutes);

module.exports = app;

const express = require("express");
const { HomeRouter } = require("./routes/home");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(HomeRouter);

app.listen(port);

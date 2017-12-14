const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const index = require("./routes/indexRoute");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/", index);

app.listen(3000);
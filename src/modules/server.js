const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

const rtAPIv1 = require("../routes/routeAPIv1");
const index = require("../routes/indexRoute");

app.use("/api/v1/", rtAPIv1);
app.use("/", index);

app.listen(4000);

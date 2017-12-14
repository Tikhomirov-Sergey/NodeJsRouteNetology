const express = require("express");
const fs = require('fs');

const index = express.Router();

index.get("/hello", function (req, res) {
    res.status(200).send("Hello stranger!");
});

index.get("/hello/:name", function (req, res) {
    res.status(200).send(`Hello, ${req.params.name}`);
});

index.all("/sub/*", function (req, res) {
    res.status(200).send(`You requested URI: ${req.hostname + req.originalUrl}`);
});

index.post("/post/", function (req, res) {
    if(Object.keys(req.body).length !== 0) {
        res.json(req.body);
    } else {
        res.status(404).send("404 Not Found");
    }
});

index.get("/test_post", function (req, res) {
    fs.createReadStream('../template/index.html').pipe(res);
});

index.get("/*", function (req, res) {
    res.status(200).send("Hello, Express.js");
});

module.exports = index;
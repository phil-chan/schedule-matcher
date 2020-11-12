const express = require("express");
const mydb = require("../db/index");
const router = express.Router();

router.post("/", (req, res) => {
  mydb.generateEvent(req.body).then((data) => res.json(data));
});

module.exports = router;

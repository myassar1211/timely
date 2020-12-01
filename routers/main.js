const express = require("express");
const server = express();
const router = express.Router();

router.get("/main", (req, res) => {
  console.log("main CALL");
  res.send("main");
});

router.get("/main/test", (req, res) => {
  console.log("main CALL");
  res.send("main");
});

module.exports = router;

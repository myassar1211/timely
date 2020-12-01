const express = require("express");
const server = express();
const router = express.Router();


router.get('/client',(req, res)=>{
    console.log('CLIENT CALL');
    res.send('CLIENT');
})

router.get('/client/test',(req, res)=>{
    console.log('CLIENT CALL');
    res.send('CLIENT');
})


module.exports = router;
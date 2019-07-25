const express = require('express');
const path = require('path');
const rootDir    = require('../utils/path');

const router  = express.Router()



router.get('/',(req,res,next)=>{
    console.log("Second Middleware");
    res.sendFile(path.join(rootDir,'views','outler.html'));
});
 

module.exports = router;
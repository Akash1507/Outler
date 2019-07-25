const express    = require('express');
const bodyParser = require('body-parser');

const path       = require('path');
const rootDir    = require('./utils/path');
const adminRoutes  = require('./routes/admin');
const outlerRoutes = require('./routes/outler'); 

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(outlerRoutes);

app.use(express.static(path.join(rootDir,'public')));

app.use('/',(req,res,next) =>{
    res.status(404).sendFile(path.join(rootDir,"views","notfound.html"));
})



app.listen(3000);

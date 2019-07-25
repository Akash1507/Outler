const express    = require('express');
const bodyParser = require('body-parser');

const path       = require('path');
const rootDir    = require('./utils/path');
const adminData  = require('./routes/admin');
const outlerRoutes = require('./routes/outler'); 

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminData.routes);
app.use(outlerRoutes);

app.use(express.static(path.join(rootDir,'public')));

app.use('/',(req,res,next) =>{
    res.status(404).render('notfound',{pageTitle:"404 Page"});
})



app.listen(3000);

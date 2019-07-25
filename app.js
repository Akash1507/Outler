const express    = require('express');
const bodyParser = require('body-parser');

const path       = require('path');
const rootDir    = require('./utils/path');
const adminRoutes  = require('./routes/admin');
const outlerRoutes = require('./routes/outler'); 
const errorController   = require('./controllers/errors');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(outlerRoutes);

app.use(express.static(path.join(rootDir,'public')));

app.use('/',errorController.get404Page);



app.listen(3000);

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.engine('hbs', expressHbs()); // using engine method, we are giving the engine name(any name) and from where the engine is used from. As we imported the epxress-handlebars in the name of expressHbs.
app.set('view engine','hbs'); // changing the view engine from pug to handlebars(The name we given above when we use the engine)
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
    res.status(404).render('error', {pageTitle: '404 Error'});
});

app.listen(3000);

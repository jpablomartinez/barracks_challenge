const express = require('express');
const app = express();
const routesPublic = require('./routes/public');
const routesPrivate = require('./routes/private');
const config = require('./utils/config.json');
const {sequelize} = require('./models/index');
const auth = require('./middlewares/auth');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    next();
});

app.use(express.json())
app.use(express.urlencoded())

//routes
app.use('/', routesPublic);
app.use('/', auth, routesPrivate)

//connect to db

sequelize.sync().then(() => {
    app.listen(config.server.port, ()=> {
        console.log('server is running');
    });
});
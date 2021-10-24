const express = require('express');
const app = express();
const routesPublic = require('./routes/public');
const config = require('./utils/config.json');
const {sequelize} = require('./models/index');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use(express.urlencoded())

//routes
app.use('/', routesPublic);

//connect to db

sequelize.sync().then(() => {
    app.listen(config.server.port, ()=> {
        console.log('server is running');
    });
});
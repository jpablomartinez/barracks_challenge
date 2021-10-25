const express = require('express');
var cors = require('cors')
const app = express();
const routesPublic = require('./routes/public');
const routesPrivate = require('./routes/private');
const config = require('./utils/config.json');
const {sequelize} = require('./models/index');
const auth = require('./middlewares/auth');

app.use(cors())

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
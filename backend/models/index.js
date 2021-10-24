const Sequelize = require('sequelize');

///connection to cloud db
const sequelize = new Sequelize(
    'postgres://fteqgpho:qVw8uPtcawATsB-bc1VZazs4WW-gDkey@fanny.db.elephantsql.com/fteqgpho'
);

sequelize.authenticate().then(()=> console.log('connection done')).catch(err => console.log(err));

const models = {
    User: require('./user')(sequelize, Sequelize.DataTypes),
    Log: require('./log')(sequelize, Sequelize.DataTypes),    
    UserLog: require('./user_log')(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach(key => {
    if('associate' in models[key]){
        models[key].associate(models);
    }
});

module.exports = {models, sequelize}

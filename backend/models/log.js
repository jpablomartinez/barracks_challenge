const log = (sequelize, DataTypes) => {

    const Log = sequelize.define('log',{
        log_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        device: {type: DataTypes.STRING},
        active: {type: DataTypes.BOOLEAN}
    });

    Log.associate = models => {
        Log.belongsToMany(models.User, {
            through: models.UserLog,
            as: 'Logged',
            foreignKey: 'log_id',
            otherKey: 'user_id'
        });
    };

    return Log;

}

module.exports = log;
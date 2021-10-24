const user = (sequelize, DataTypes) => {

    const User = sequelize.define('user',{
        user_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        firstname: {type: DataTypes.STRING},
        lastname: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        user_type: {type: DataTypes.SMALLINT}
    });

    User.associate = models => {
        User.belongsToMany(models.Log, {
            through: models.UserLog,
            as: 'Logged',
            foreignKey: 'user_id',
            otherKey: 'log_id'
        });
    }

    return User;

}

module.exports = user;
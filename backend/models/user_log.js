const userlog = (sequelize, DataTypes) => {

    const UserLog = sequelize.define('userlog', {
        user_id: {type: DataTypes.SMALLINT},
        log_id: {type: DataTypes.SMALLINT}
    });

    return UserLog;

}

module.exports = userlog;
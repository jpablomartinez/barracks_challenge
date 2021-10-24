const {models} = require('../models/index');

const updateLogEntry = async(log_id) => {
    try{
        const updated = await models.Log.update({
            active: false,
            where: {
                log_id: log_id
            }
        });
        console.log(updated);
        return true;

    }
    catch(err){
        return false;
    }
}

const isUserLogged = async (id) => {
    try{
        const r = await models.Log.findAll({
            where: {active: true},
            include: {
                model: models.User,
                as: 'Logged',
                where: {user_id: id},
            }
        });
        console.log(r);
        return r;

    }
    catch(err){
        console.log(err)
        return false;
    }
}

const createLogEntry = async (user_id, device)=> {
    try{
        const entry_log = await models.Log.create({
            device: device,
            active: true,
        });
        await models.UserLog.create({
            user_id: user_id,
            log_id: entry_log.log_id
        });
        return entry_log.log_id;
    }
    catch(err){
        return -1;
    }
}

module.exports = {
    isUserLogged,
    createLogEntry,
    updateLogEntry
}
const {models} = require('../models/index');

const updateLogEntry = async(log_id) => {    
    try{
        await models.Log.update({active: false},{where: {log_id: log_id}})
    }
    catch(err){
        return false;
    }
}

const getLastSessionUsers = async (req, res) => {
    try{
        const users = await models.Log.findAll({
            include: {
                model: models.User,
                as: 'Logged',
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });
        const usersData = [];
        const id = []        
        users.forEach((u) => {
            if(usersData.length === 0){
                if(u.Logged[0].user_type !== 0){
                    usersData.push(getUserData(u,1));
                    id.push(u.Logged[0].user_id);
                }                
            }
            else {
                if(!id.includes(u.Logged[0].user_id)) {     
                    if(u.Logged[0].user_type !== 0) {
                        usersData.push(getUserData(u, id.length+1));
                        id.push(u.Logged[0].user_id);
                    }                       
                }
            }
        });
        return res.status(200).json({data: 100, users: usersData});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({data: 103});
    }
}

function getUserData(object, index){
    return {
        name: object.Logged[0].firstname + ' ' + object.Logged[0].lastname,
        email: object.Logged[0].email,
        connection: object.createdAt,
        device: object.device,
        id: index
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
    updateLogEntry,
    getLastSessionUsers
}
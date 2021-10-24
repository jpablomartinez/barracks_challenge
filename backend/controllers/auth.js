const { models } = require('../models/index');
const { createToken } = require('../utils/create_token');
const logged = require('./log_controller');

const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await models.User.findOne({where: {email: email, password: password}});
        if(user != null){
            const u = {
                firstname: user.firstname,
                email: user.email,
                type: user.user_type,
                log_id: 0
            }
            const userLogged = await logged.isUserLogged(user.user_id);                
            if(userLogged.length > 0){
                await logged.updateLogEntry(userLogged.log_id);
                await logged.createLogEntry(user.user_id, 'desktop');
                return res.status(200).json({data: 100});
            }
            else {                    
                const r = await logged.createLogEntry(user.user_id, 'desktop');
                u.log_id = r.log_id;
                return res.status(200).json({data: 101, user: u, token: createToken(u)});
            }
        }
        else return res.status(200).json({data: 102})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({data: 103});
    }
}

const logout = async (req, res) =>{
    //get id from token
    const log_id = 1;
    await logged.updateLogEntry(log_id);
    return res.status(200).json({data: true})
}

module.exports = {
    login,
    logout
}
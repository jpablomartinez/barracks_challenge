const {models} = require('../models/index');

const getAllUsers = async (req, res) => {
    try{
        const users = await models.User.findAll(); 
        return res.status(200).json({u: users});
    }
    catch(error){
        return res.status(500).json({err: 'erro'});
    }
}

const createUser = async (req, res) => {
    try{
        const [_nUser, created] = await models.User.findOrCreate({
            where: {email: req.body.email},
            defaults: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                user_type: 1
            }
        });
        return res.status(200).json({data: created ? 100 : 101})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({data: 200});
    }
}


module.exports = {
    createUser,
    getAllUsers
}
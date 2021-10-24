const jwt = require('jsonwebtoken');

exports.createToken = (user) => {

    return jwt.sign({user: user}, 'bbstream', {expiresIn: '7d'})    

}
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {    
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        if(req.originalUrl === '/getUsers' && decode.user.type === 0) next();
         else return res.status(500).json({data: 101, err: 'invalid route'});
        /*jwt.verify(token, 'bbstream', function(err, decode) {      
            console.log(err) 
            if(err) return res.status(200).json({data: 102});
            else{                
                if(req.originalUrl === '/getUsers' && decode.user.type === 0) next();
                else return res.status(500).json({data: 101, err: 'invalid route'});
            } 
        });*/
    }
    catch(err){
        return res.status(500).json({data: 103, err: 'no token provided'});
    }
}

module.exports = auth;
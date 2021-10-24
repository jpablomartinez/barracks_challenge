const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
    res.status(200).json({message: 'bbstream'});
})

router.post('/login', controllers.auth.login);

router.get('/get', controllers.user.getAllUsers);

router.post('/register', controllers.user.createUser);

module.exports = router;
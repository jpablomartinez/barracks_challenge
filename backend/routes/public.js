const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
    res.status(200).json({message: 'bbstream'});
})

router.post('/login', controllers.auth.login);

router.post('/register', controllers.user.createUser);

router.post('/logout', controllers.auth.logout);

module.exports = router;
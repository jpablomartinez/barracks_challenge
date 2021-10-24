const router = require('express').Router();
const controllers = require('../controllers');


router.get('/getUsers', controllers.logged.getLastSessionUsers);
router.post('/logout', controllers.auth.logout);

module.exports = router;
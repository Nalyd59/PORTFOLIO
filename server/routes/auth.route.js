const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.createUser);
router.post('/login', authController.signUp);
router.get('/dashboard', authController.dashboard);


module.exports = router;

const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.post('/register', usersController.createUser);
router.post('/signup', usersController.signUp);
router.get('/commentaires', usersController.getCom);
router.post('/newCommentaire', usersController.postCom);


module.exports = router;

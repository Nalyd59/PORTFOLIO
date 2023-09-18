const router = require('express').Router();
const formationsController = require('../controllers/formations.controller');

router.post('/create', formationsController.createFormations);
router.get('/recup', formationsController.getFormations);


module.exports = router;

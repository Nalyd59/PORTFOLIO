const router = require('express').Router();
const projetsController = require('../controllers/projets.controller');

router.post('/create', projetsController.createProjets);
router.get('/recup', projetsController.getProjets);
router.delete('/supp/:id', projetsController.deleteProjets);


module.exports = router;

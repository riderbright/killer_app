var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), 
    methodOverride = require('method-override'); 

var killersController = require('../controllers/killers');


router.route('/killers')


.get(killersController.getAll)

.post(killersController.createKiller);


router.route('/killers/:id')


.get(killersController.getKiller)

.patch(killersController.updateKiller)

.delete(killersController.removeKiller);


module.exports = router
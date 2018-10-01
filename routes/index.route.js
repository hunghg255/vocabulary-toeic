var express = require('express');
var router = express.Router();
var Controller = require('../controller/index.controller');
var Validate = require('../validates/validate');


router.get('/', Controller.index);
router.get('/my-vocabulary', Controller.index);
router.post('/my-vocabulary',Validate.create, Controller.create);
router.get('/my-vocabulary/delete/:id', Validate.delete, Controller.delete);
router.get('/my-vocabulary/edit/:id', Controller.edit);
router.get('/my-vocabulary/excersise',Validate.excersise, Controller.excersise);



module.exports = router;
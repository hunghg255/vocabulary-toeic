var db = require('../model/db');
var shortid = require('shortid');
var vocas = db.get('vocabulary').value();


module.exports.create = function(req, res, next) {
	if (req.body.id != undefined){
		var voca = {
			id: req.body.id,
			word: req.body.word.trim(),
			mean: req.body.mean.trim(),
			suggest: req.body.suggest.trim(),
		}
		var v = db.get('vocabulary').find({id: voca.id}).value();
		var index = vocas.indexOf(v);
		vocas.splice(index,1,voca);
		db.set('vocabulary', vocas).write()
	} 
	else {
		var voca = {
			id: shortid.generate(),
			word: req.body.word.trim(),
			mean: req.body.mean.trim(),
			suggest: req.body.suggest.trim(),
		}
		db.get('vocabulary').push(voca).write();
	}
	next();
}

module.exports.delete = function (req, res, next) {
	var id = req.params.id;
	var v = db.get('vocabulary').find({id: id}).value();
	var index = vocas.indexOf(v);
	vocas.splice(index,1);
	db.set('vocabulary', vocas).write();
	next();
}

module.exports.excersise = function (req, res, next) {
	var arr = ['Translate to Vietnamese', 'Translate to English'];
	var type = Math.floor(Math.random() * 2 + 1);

	var count = vocas.length;
	var th = Math.floor(Math.random() * (count - 1));

	var randomResult = vocas[th];

	var package = {
		type: arr[type-1],
		word: randomResult
	}
	res.locals.type = type;
	res.locals.package = package;
	next();
}





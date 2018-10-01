var db = require('../model/db');

module.exports.index = function(req, res) {
	res.render('index', {
		vocabulary: db.get('vocabulary').value(),
		size: db.get('vocabulary').value().length
	});		
}
//GUI LEN 1 POST

module.exports.create = function(req, res) {
	res.redirect('/my-vocabulary');		
}

//GET 
module.exports.delete = function(req, res) {
	res.redirect('/my-vocabulary');		
}

module.exports.edit = function(req, res) {
	var id = req.params.id;
	var voca = db.get('vocabulary').find({id: id}).value();
	res.render('edit', {
		vocas: voca
	});		
}

module.exports.excersise = function(req, res) {
	res.render('excersise'+ res.locals.type, {data: res.locals.package });		
}


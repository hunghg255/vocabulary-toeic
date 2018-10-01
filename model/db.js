var lowdb = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('./model/db.json');
db = lowdb(adapter);
db.defaults({vocabulary: []}).write();

module.exports = db;
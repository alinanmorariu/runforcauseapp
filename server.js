var express = require('express');
var app = express();
var mongojs = require('mongojs');
var projectsdb = mongojs('projects', ['projects']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/projects', function(req, res){
	console.log("I received a GET request!");
	projectsdb.projects.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/projects', function(req, res){
	projectsdb.projects.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/projects/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	projectsdb.projects.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	})
})

app.get('/projects/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	projectsdb.projects.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
})

app.put('/projects/:id', function(req, res){
	var id = req.params.id;
	projectsdb.projects.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {ngoName: req.body.ngoName, name: req.body.name}},
		new: true}, function(err, doc){
			res.json(doc);
		});
})

app.listen(3000);

console.log('This server listens to port 3000!');
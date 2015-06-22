var express = require('express');
var app = express();
var mongojs = require('mongojs');
var projectsdb = mongojs('projects', ['projects']);
var runnersdb = mongojs('runners', ['runners'])
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/projects', function(req, res){
	projectsdb.projects.find(function(err, docs){
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
	projectsdb.projects.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	})
})

app.get('/projects/:id', function(req, res){
	var id = req.params.id;
	projectsdb.projects.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
})

app.put('/projects/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	projectsdb.projects.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {ngoName: req.body.ngoName, name: req.body.name}},
		new: true}, function(err, doc){
			console.log(doc);
			res.json(doc);
		});
})

app.get('/runners', function(req, res){
	runnersdb.runners.find(function(err, docs){
		res.json(docs);
	});
});

app.post('/runners', function(req, res){
	runnersdb.runners.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/runners/:id', function(req, res){
	var id = req.params.id;
	runnersdb.runners.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	})
})

app.get('/runners/:id', function(req, res){
	var id = req.params.id;
	runnersdb.runners.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
})

app.put('/runners/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	runnersdb.runners.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {runnerName: req.body.name, runnerForname: req.body.forname, runnerDob: req.body.dob, runnerProject: req.body.project, runnerCity:req.body.city, runnerPhone: req.body.phone, runnerEmail: req.body.phone, runnerBest: req.body.best}},
		new: true}, function(err, doc){
			console.log(doc);
			res.json(doc);
		});
})

app.listen(3000);

console.log('This server listens to port 3000!');
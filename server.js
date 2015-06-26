var express = require('express');
var app = express();
var mongojs = require('mongojs');
var projectsdb = mongojs('projects', ['projects']);
var runnersdb = mongojs('runners', ['runners']);
var supportersdb = mongojs('supporters', ['supporters']);
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
	projectsdb.projects.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, ngoName: req.body.ngoName}},
		new: true}, function(err,doc){
			res.json(doc);
		});
});

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
	runnersdb.runners.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name:req.body.name, forname:req.body.forname, dob:req.body.dob, race:req.body.race, project:req.body.project, city:req.body.city, phone:req.body.phone, email:req.body.email}},
		new: true}, function(err, doc){
			res.json(doc);
		});
});

app.get('/runners', function(req, res){
	runnersdb.runners.find(function(err, docs){
		res.json(docs);
	});
});

app.post('/supporters', function(req, res){
	supportersdb.supporters.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/supporters/:id', function(req, res){
	var id = req.params.id;
	supportersdb.supporters.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	})
})

app.get('/supporters/:id', function(req, res){
	var id = req.params.id;
	supportersdb.supporters.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
})

app.put('/supporters/:id', function(req, res){
	var id = req.params.id;
	supportersdb.supporters.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name:req.body.name, forname:req.body.forname, dob:req.body.dob, race:req.body.race, project:req.body.project, city:req.body.city, phone:req.body.phone, email:req.body.email}},
		new: true}, function(err, doc){
			res.json(doc);
		});
});

app.listen(3000);

console.log('This server listens to port 3000!');
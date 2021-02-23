const path = require("path");
const fs = require("fs");
const db = require('../db/db.json');

module.exports = app => {
	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/index.html")); 
	}); 

	app.get('/notes', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/notes.html"));
		console.log(req.body)
	});

	app.get('/api/notes', (req, res) =>{
		return res.json(db);
	});

	app.post('/api/notes', (req, res) => {
		let newNote = req.body; 

		console.log(newNote); 
	});

	app.delete('/api/notes/:id'), (req, res) => {
		res.send("Delete request")
	};

}


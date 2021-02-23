const path = require("path");
const db = require('../db/db.json');
const fileUtils = require("../utils/fileUtils");


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
		let noteToAdd = req.body; 
		let savedNotesList = fileUtils.getNotes();

		noteToAdd.id = savedNotesList.length;
		savedNotesList.push(noteToAdd);

		fileUtils.saveNotes(savedNotesList);
	});

	app.delete('/api/notes/:id'), (req, res) => {
		res.send("Delete request")
	};

}


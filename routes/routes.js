const path = require("path");
const db = require('../db/db.json');
const fileUtils = require("../utils/fileUtils");


module.exports = app => {
	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/index.html")); 
	}); 

	app.get('/notes', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});

	app.get('/api/notes', (req, res) =>{
		return res.json(db);
	});

	app.post('/api/notes', (req, res) => {
		let savedNotesList = fileUtils.getNotes();

		req.body.id = savedNotesList.length;
		savedNotesList.push(req.body);

		fileUtils.saveNotes(savedNotesList);
	});

	app.delete('/api/notes/:id', (req, res) => {
		let savedNotesList = fileUtils.getNotes(); 

		savedNotesList = savedNotesList.filter(note => {
			return note.id != req.params.id
		}); 

		savedNotesList.forEach(note => {
			if(note.id > req.params.id){
				note.id--; 
			}

		})

		fileUtils.saveNotes(savedNotesList)
	});

}


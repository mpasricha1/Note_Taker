const path = require("path");
const fileUtils = require("../utils/fileUtils");


module.exports = app => {

	app.get('/api/notes', (req, res) =>{
		res.json(fileUtils.getNotes());
	});

	app.post('/api/notes', (req, res) => {
		let savedNotesList = fileUtils.getNotes();

		req.body.id = savedNotesList.length;
		savedNotesList.push(req.body);

		fileUtils.saveNotes(savedNotesList);

		return res.json(req.body);
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

		fileUtils.saveNotes(savedNotesList);
		console.log("Note Successfully Deleted");

		return res.json(savedNotesList);
	});

}


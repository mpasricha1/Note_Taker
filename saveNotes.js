const saveNotes = (savedNotesList) => {
	fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotesList), "utf8", (err) =>{
			err ? console.log(err) : console.log("Note Successfuly Saved"); 
		});
}; 

module.exports = saveNotes; 
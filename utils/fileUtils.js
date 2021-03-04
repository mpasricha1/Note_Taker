const fs = require("fs");
const path = require("path");

const getNotes = () => {
	return JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
}

const saveNotes = (savedNotesList) => {
	fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotesList), "utf8", (err) =>{
			err ? console.log(err) : console.log("Notes Successfuly Updated"); 
		});

}; 

module.exports = {saveNotes, getNotes}; 
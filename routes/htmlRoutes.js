const path = require("path");
const fileUtils = require("../utils/fileUtils");


module.exports = app => {
	app.get('/notes', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});
	app.get('*', (req, res) =>{
		res.sendFile(path.join(__dirname, "../public/index.html")); 
	}); 
};
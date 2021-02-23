const http = require("http"); 
const fs = require("fs"); 
const express = require("express"); 
const path = require("path");
const db = require('./db/db.json');

const app = express();
const PORT = 5000; 

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname, "public/index.html")); 
}); 

// app.use('*', (req, res) =>{
// 	res.redirect('/');
// });

app.get('/notes', (req, res) =>{
	res.sendFile(path.join(__dirname, "public/notes.html"));
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

app.listen(PORT, () =>{
	console.log(`Listening on Port: ${PORT}`); 
});
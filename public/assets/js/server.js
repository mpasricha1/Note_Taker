const http = require("http"); 
const express = require("express"); 
const app = express()

const PORT = 8080; 

app.get('/', (req, res) =>{
	res.send("New Test")
}); 

app.get('/api/notes', (req, res) =>{
	res.send("This is the api/notes route");
})

app.post('/api/notes', (req, res) => {
	res.send("POST Request")
})

app.delete('/api/notes/:id'), (req, res) => {
	res.send("Delete request")
}

app.listen(PORT, () =>{
	console.log(`Listening on Port: ${PORT}`); 
})
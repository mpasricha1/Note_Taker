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

app.listen(PORT, () =>{
	console.log(`Listening on Port: ${PORT}`); 
})
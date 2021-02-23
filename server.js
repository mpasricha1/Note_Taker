const http = require("http");  
const express = require("express"); 

const app = express();
const PORT = 5000; 

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

require("./routes/routes")(app);

app.listen(PORT, () =>{
	console.log(`Listening on Port: ${PORT}`); 
});
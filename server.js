const express = require("express"); 

const app = express();
const PORT = 5000; 

app.use('/public',express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app);

app.listen(process.env.PORT || 5000, () =>{
	console.log(`Listening on Port: ${PORT}`); 
});
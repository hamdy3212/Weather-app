// Setup empty JS object to act as endpoint for all routes
const projectData = {
};

// Require Express to run server and routes
const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express(),
      cors       = require('cors');
      
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
app.get('/data', (req, res)=>{
    res.send(projectData);
});

app.post('/', (req, res)=>{
    const data = req.body;
    projectData.temp = data.temp;
    projectData.date = data.newDate;
    projectData.userRes = data.userRes;
});

app.listen(3000, ()=>{
    console.log("server is running");
});
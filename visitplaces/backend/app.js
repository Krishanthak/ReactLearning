const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;

var client = new Client();

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/getLocations', (req, res) => {
    const typeWord = req.body.city;
    // direct way
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typeWord+"+top+sights&key=AIzaSyBMsWh-uLdoHhbkYWHNobnyphEuzA5kJSk", function (data, response) {
        // parsed response body as js object
        // console.log(data);
        // raw response
        // console.log(response);
        res.json({msg:true, data:data})
    });
})
app.listen(3001, () => {
    console.log('listening to port 3001');
});

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var axios = require('axios');
const router = express.Router();
var request = require('request');


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

async function getReponse(req, res) {

    const protocol = "https";
    const host = "www.mintscan.io";
    const url = req.originalUrl;

    const fullUrl = `${protocol}://${host}${url}`;

    try{
        console.log(req.hostname + req.originalUrl);
        console.log(fullUrl);
        // var respnose = await axios.get(fullUrl);
    
        req.pipe(request(fullUrl)).pipe(res);
    
        // return respnose;
    }
    catch(err){
        console.log(err);
    }
}
app.get('*', async(req, res) => {
    var response = await getReponse(req, res);
    // console.log(res.get('Content-Type'));
    // res.send(response.data);
});

app.listen(8080);
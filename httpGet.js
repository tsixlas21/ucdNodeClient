const http = require('https');
const fs = require('fs');
const { hostname } = require('os');
const axios= require('axios');
//Setting up input paramters 

const args = process.argv;
const httpMethod =args[2];
const path=args[3]
const headers ={'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64'),'Content-Type': 'application/json; charset=utf-8'}


//UCD server's host details

const hostName ='localhost';
const httpPort='8444'; 

//Setting up the options for get an post

const options = {
  hostName: hostName,
  path: path,
  //since we are listening on a custom port, we need to specify it by hand
  port: httpPort,
  //This is what changes the request to a POST request
  method: httpMethod ,
  headers: headers
};


  callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
   // console.log(str);
    const json=JSON.parse(str);
    for (var i = 0; i < json.length; i++) {
      console.log(json[i]['name']);
    }
  });
}
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//Main Logic
if (httpMethod==='GET'){
    var req = http.request(options, callback).end();
    }
    if (httpMethod==='POST'){
        var req = http.request(options, callback).end();
        }
if (httpMethod==='PUT'){

    

//read the standard json file

fs.readFile('/Users/alexandroskarahalios/personalTraining/udemy/ucdHttpClient/static/createResourceSample.json','utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data);

//Convert the file to a JSON object
    jsonBody =JSON.parse(data);
    console.log(jsonBody);

//Submit the http request    

});

}


/*  
I
Create a component from a component template 
tag it 


Create a resource 
map the agent to the resource
map the component to the agent resource


Create an application
Create an environment
Assing the resource to the environment



*/
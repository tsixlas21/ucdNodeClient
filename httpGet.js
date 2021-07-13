const http = require('https');
const fs = require('fs');
const { hostname } = require('os');
const axios= require('axios');
const {exec}  = require("child_process");

//Setting up input paramters 

const args = process.argv;
const httpMethod =args[4];
const path=args[5]
const headers ={'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64'),'Content-Type': 'application/json; charset=utf-8'}


//UCD server's host details testing changes

const hostName =args[2];
console.log("This is the hostname provided " +hostName);
const httpPort=args[3]; 

//Setting up the options for get an post

const options = {
  hostName: hostName,
  path: path,
  //since we are listening on a custom port, we need to specify it by hand
  port: httpPort,
  //This is what changes the request to a POST request
  method: httpMethod,
  headers: headers
};

console.log(args);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;



http.get('https://admin:admin@10.14.32.73:8443/rest/deploy/component/17918180-29d2-43c2-e5fb-d792eb443e1b/processes/false?', function(res) {
  
  var str = ''
  res.on('data', function (chunk) {
    str += chunk;
  });

  res.on('end', function () {
   // console.log(str);
    const json=JSON.parse(str);
    for (var i = 0; i < 2; i++) {
      console.log(json[i]['id'] +":"+json[i]['name']);
      for (var j = 0; j < 2; j++){
        console.log("I am inside the seconds loop");

        exec("cd /Users/alexandroskarahalios/Downloads/pacc-0.1.0.1073519/ && ls -al && ./upload-component-process admin https://10.14.40.162:8443 17917d21-2b8e-fd28-76bf-7209530fd9ca test_process_7103.pac ", (error, stdout, stderr) => {
         console.log ("I am inside the exec") 
        
        if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log(`Command output stdout: ${stdout}`);
        });

      }

    }
  });
console.log(res.statusCode);

});

/* Call the pac utility from urbancode*/
let id= "17917d21-2b8e-fd28-76bf-7209530fd9ca"





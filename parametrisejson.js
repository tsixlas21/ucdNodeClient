const fs =require('fs');
const https = require('https');
const appExportPath="./component_process.json"
const args = process.argv;


process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


const options = {
    hostName: "10.14.40.162",
    path: "/cli/componentProcess/create",
    //since we are listening on a custom port, we need to specify it by hand
    port: "8443",
    //This is what changes the request to a POST request
    method: "PUT" ,
    headers: {'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64'),'Content-Type': 'application/json; charset=utf-8'}
  };
let tempData;
  
  for (let index = 99; index < 200; index++) {


    fs.readFile (appExportPath,(err,data)=>{
        if (err) throw err;
        tempData =JSON.parse(data);
        tempData.name="test_"+index ;
        console.log("Component Process Name : " + tempData.name);
    
        fs.writeFileSync("../static/component_process_test"+index+".json", JSON.stringify(tempData));
        
        
    })
    }  
/*
    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    
    req.on('error', error => {
      console.error(error)
    })*/

    

    

    



  


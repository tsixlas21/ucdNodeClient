const fs =require('fs');
const Component = require("./objects/component.js");
const Application=require("./objects/application.js")
const compExportPath = "./static/exampleComponent.json";
const appExportPath="./static/ucdApplicationExport.json"

fs.readFile (appExportPath,(err,data)=>{
    if (err) throw err;
    const tempData =JSON.parse(data);
    application=new Application(tempData.name);
    console.log("Application Name : " + application.name);

    const plugins =new Map();

/*Get the list of components */
const components=[];
    for (const comp of tempData.components) {
        components.push(comp);
        
         for (const proc of comp.processes){
            for (let index = 1; index < proc.rootActivity.children.length; index++) {
            plugins.set(proc.rootActivity.children[index].pluginName,proc.rootActivity.children[index].pluginVersion)    
        }
         }
        
    } 

    components.forEach(function(comp) {
    
    console.log ( comp.name );
    })
    
    plugins.forEach(function(value, key) {
        console.log(key + ' v' + value)
      })

    console.log(plugins.size);
/*Get the list of component processes */

        } );
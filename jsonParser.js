const fs =require('fs');
const appExportPath="./static/testApplication.json"

fs.readFile (appExportPath,(err,data)=>{
    if (err) throw err;
    const tempData =JSON.parse(data);
    console.log("Application Name : " + tempData.name);

    const plugins =new Map();

/*Get and print the list of plugins used by this application */
const components=[];
    for (const comp of tempData.components) {
       // components.push(comp);
        
         for (const proc of comp.processes){
             if(proc.rootActivity!=null){
            for (let index = 1; index < proc.rootActivity.children.length; index++) {
                pluginName=proc.rootActivity.children[index].pluginName;
                pluginVersion=proc.rootActivity.children[index].pluginVersion;                
                if (plugins.has(pluginName)&plugins.get(pluginName)!=pluginVersion ){
                    console.log("There are multiple versions of plugin : " + pluginName + ": " + pluginVersion + " ==> Path: " + proc.path );
                    
                    break;
                }
            plugins.set(pluginName , pluginVersion)    
        }}
         
    }     
    } 
    plugins.forEach(function(value, key) {
        console.log(key + ' v ' + value)
      })

 /*   components.forEach(function(comp) {
    
    console.log ( comp.name );
    })*/
    
    
} );
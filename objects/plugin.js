
class Plugin {

    name;
    version;
    

    constructor(name)
{
    this.version=""
    this.name =name;
}


set name (name){
    this.name=name;
}
get name(){
    return this.name;
}

set version(pluginVersion){
    this.version=pluginVersion;
}
get version(){
    return this.version;
}

showInfo() {
    console.log(`Plugin : ` +this.name + '--'+ this.version);
}

}

module.exports=Plugin;
 class Component{

 name;
 srcType;
 processes;
 componentTemplate;   

 constructor (name, srcType){

    this.name =name;
    this.srcType=srcType;
}


get name(){
    return this.name;
}

get srcType(){
    return this.srcType;
}

set srcType(srcType){
    this.srcType=srcType;

}






}

module.exports=Component;
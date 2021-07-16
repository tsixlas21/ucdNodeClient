 class Component{

 name;
 srcType;
 processes;
 componentTemplate;   
 teams;

 constructor (name, srcType,componentTemplate,teams){

    this.componentTemplate;
    this.name =name;
    this.srcType=srcType;
    this.teams=teams;

}


get name(){
    return this.name;
}

get teams(){
    return this.teams;
}

get srcType(){
    return this.srcType;
}

set srcType(srcType){
    this.srcType=srcType;

}






}

module.exports=Component;
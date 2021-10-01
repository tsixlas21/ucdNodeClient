class Application {

name;
id;
version;
type;
meta;

constructor(name){

    this.name=name;


}

get name (){

    return this.name;
}
get id (){

    return this.id;
}

}

module.exports=Application;
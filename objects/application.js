class Application {

name;
id;
version;
type;

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
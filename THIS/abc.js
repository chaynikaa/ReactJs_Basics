//this is a keyword that particularly refers to an object
//the value of this would change according to the context in which it is being referred to

console.log(this);  //this will give a window object

//we need this for function calling

function fn(){
    console.log(this); //window
    console.log(`Hi I am ${this.person}`);  //Hi I am undefined. because this is giving window object which doesnt have any 'person'key
}

//normal call
fn();
//in normal call the value of this is passed as window object only

let obj = {
    person:'Chaynika',
    func = fn
}

//function call with object

obj.func();   //in this case this is equal to the object through which it is called. so this time it will print Hi I am Chaynika

let ret = obj.func;
ret();           //this will give this as window. it is same as calling fn()   ret is just pointing to fn memory location(not pointing it through any intermediate object)

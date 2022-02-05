function fn()
{
    console.log(`Hi I am ${this.person}`);
    function abc(){
        console.log(`Hi I am ${this.person}`);
    }
    abc();   //not called through any object
}

let obj = {
    person:'Chaynika',
    func:fn
}
obj.func();   //in this case the upper one will print chaynika but the nested one will print undefined(eindow object)


//*********************************************************************BIND FUNCTION************************************************************* */

function fn()
{
    console.log(`Hi I am ${this.person}`);
    function abc(){
        console.log(`Hi I am ${this.person}`);
    }
    let ret = abc.bind(this);   //using bind function
    ret();   //will give chaynika
    abc();   //this will give undefined
}

let obj = {
    person:'Chaynika',
    func:fn
}
obj.func();   //both this will give 'chaynika';

//********************************************************************ARROW FUNCTION*************************************************** */


function fn()
{
    console.log(`Hi I am ${this.person}`);
    let abc = () =>{               //arrow function-> passes the this of above function
        console.log(`Hi I am ${this.person}`);
    }

}

let obj = {
    person:'Chaynika',
    func:fn
}
obj.func();   //both this will give 'chaynika';


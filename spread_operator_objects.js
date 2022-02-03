let person = {
    name:'Chaynika',
    age:'19',
    school:{
        name:'SGNPS',
        location:'Delhi',
    stream:{
        name:'non medical'
     }    
    }
}
//reference variable copy
// let copy = person;              //it doesnt actually make a copy. IT just start pointing at the same memory location
// copy.name = 'Avni';             //functions, objects and arrays take heap memory not stack memory

// console.log(person);
// console.log(copy);

/**********************************SPREAD OPERATOR USE ********************************** */
//SHALLOW COPY
let copy = {...person};           //spread operator actually creates a copy. Gives it new memory location.
copy.name = 'Avni';               //shallow copy. not deep copy. because the adsress of object within it remains same
console.log(person);
console.log(copy);

copy.school.location = 'Mumbai';        //ISSUEEE-> city changes in both the objects
console.log(person);                    //shallow copy. not deep copy. because the adsress of object within it remains same
console.log(copy);

//DOUBLE COPY, TO COPY SCHOOL ALSO

let doubleCopy = {
    ...person,
    school:{
        ...person.school
    }
}

doubleCopy.school.location = 'kanpur';

console.log(person);
console.log(doubleCopy);

//DEEP COPY->THIRD LEVEL OBJECT

let deepCopy = {
    ...person,
    school:{
        ...person.school,
        stream:{
            ...person.school.stream
        }
    }
}

deepCopy.school.stream = 'medical';

console.log(deepCopy);

//**********************************************************IF THERE ARE MORE THAN 3-4 OBJECTS*************************************** */
//THIS METHOD OF COPYING IS USED AT THAT TIME

let dcopy = JSON.parse(JSON.stringify(person));        //json.stringify change it into string. and json.parse change it back into object->new location
console.log(dcopy);

dcopy.school.stream = 'arts';

console.log(dcopy);
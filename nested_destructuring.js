const user = {
    name:'Chaynika',
    age:19,

    education:{
        degree:'Btech',
        
        school : {
            name : 'SGNPS',
            location : 'Delhi'
        }
    }
};

let{age} = user;
console.log(age);

let{education:{degree}} = user;
console.log(degree);

let{education:{school:{location}}} = user;
console.log(location);
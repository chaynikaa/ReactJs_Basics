let person={
    name:'Chaynika',
    country:'India',
    job:'Avenger'
}

// let name = person.name;
// let country = person.country;
// let job = person['job'];

// console.log(name);
// console.log(country);
// console.log(job);

//it was the traditional method


// let{name,job,country}=person;

// console.log(name);
// console.log(country);
// console.log(job);

// let{name,job,car='BMW'}=person;   //default case
// console.log(car);

//*****************************************************ALIAS NAME************************************* */
let{name:a,job:b,country:c}=person;

console.log(a);
console.log(b);
console.log(c);



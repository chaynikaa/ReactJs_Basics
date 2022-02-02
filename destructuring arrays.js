let intro = ['Hey','I','am','Chaynika','Arora'];

// let[greeting,pronoun,variable,name,surname] = intro;

// console.log(name);
// console.log(greeting);

let[greetings,pronoun,,name,surname] = intro;   //skipping the varible

console.log(name);
console.log(greetings);

//***********************************giving deault value**************************** */

let[greeting,person] = ['Chaynika'];

console.log(person);         //undefined

let[greet = 'hey',persons='Chaynika'] = ['namaste'];

console.log(persons);  
console.log(greet);    //over ride upon deafult value

//********************swapping************ */
let a = 5;
let b = 9;

[a,b] = [b,a];        //direct way to swap

console.log(a);
console.log(b);
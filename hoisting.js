//  //Function declaration with hoisting examples


//  console.log(greetHello("Brine"));

//  function greetHello(name){
//     return `hello welcome , ${name}! `
//  }
  
// //function Declaration without hoisting examples 


// console.log(greetBye('good to see you'));
// const  greetBye = function(message) {
//     return `hello welcome , ${message}! `
// }


//Example of the Arrow Function whic is ES6 
const goodBye = (message) => {
      
  return `good to see you , ${message}! `
}

console.log(goodBye('Good bye'));
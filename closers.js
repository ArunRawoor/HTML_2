// function makeCounter() {
// let count = 0; // this variable is 'locked'
// return function() { //this is a inner function
// count++;
// return count;
// };
// }
// const closer = makeCounter(); //here I am calling the outer  function

// console.log(closer());
// console.log(closer());
// console.log(closer());













// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// // Each call to makeCounter creates its own independent closure
// const counter2 = makeCounter();
// console.log(counter2()); // 1 (independent of counter)





// // Practical closure — create private variables
function createWallet(initialBalance) {
let balance = initialBalance;
return {
deposit: (amt) => { balance += amt; return balance; },
withdraw: (amt) => { balance -= amt; return balance; },
getBalance: () => balance
};
}
const wallet = createWallet(1000);





// wallet.deposit(500); // 150
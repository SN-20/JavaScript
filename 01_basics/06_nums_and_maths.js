const score = 122.435; //js interpret it to be a number

const balance = new Number(1000000);
// console.log(balance);

// console.table([
//     balance.toString(), 
//     balance.toString().length,
//     balance.toFixed(3),
//     score.toPrecision(3), //gives precision till 3 places, in this place after decimal is also included
//     // balance.toLocaleString() // gives according to US
//     balance.toLocaleString('en-IN') //gives according to Indian standard

// ])

// console.table([
//     Number.MAX_VALUE,
//     Number.MIN_VALUE,
//     Number.MAX_SAFE_INTEGER,
//     Number.MIN_SAFE_INTEGER,
// ])
// console.table([score.toString()]) 


// ************Math Object************

console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Math); //Object

console.table([
    Math.abs(-4),
    Math.round(4.65),
    Math.round(4.45), //most of the time this will be used
    Math.ceil(4.1),
    Math.floor(4.99),
    Math.max(3,6,1,5),
    Math.min(3,6,1,5),
    Math.random(), //gives value between 0 to 1
    (Math.random() * 10) + 1,
])

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generalized



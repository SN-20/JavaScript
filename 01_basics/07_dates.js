let myDate = new Date();

console.log(myDate);



// console.table([
//     typeof myDate,
//     myDate.toString(),
//     myDate.toDateString(),
//     myDate.getDate(),
//     myDate.toISOString(),
//     myDate.toJSON(),
//     myDate.toLocaleDateString(),
//     myDate.toLocaleTimeString(),
//     myDate.toTimeString()
// ]);

// let createdDate = new Date(2023, 0, 23);
// let createdDate = new Date(2023, 0, 23, 5, 6, 22);
let createdDate = new Date("2024-12-07");

let myTimeStamp = Date.now()


console.log(createdDate.toLocaleString());
console.log(myTimeStamp);
console.log(createdDate.getTime()); //you get it in milliseconds from the date jan 1 1970 12:00

console.table([
    Math.floor(createdDate.getTime()/1000),
    createdDate.getDate(),
    createdDate.getMonth(), // jan is 0 and so on
    createdDate.getMonth() + 1,
]);





const name = "     hitesh     "

let str = new String('Sonal') //stored as object

/*
String {'sonal'}
0 : "s"
1 : "o"
2 : "n"
3 : "a"
4 : "l"
length : 5
*/

console.log(str[0]);
console.log(str.__proto_);
console.table([str.length, 
    str.toUpperCase(), 
    str.at(4), 
    str.charAt(3), 
    str.indexOf('n'),
    str.substring(0,3),
    // str.slice(-3,1), // need to practice
    name.trim(), //trimStart, trimeEnd, trimLeft, trimRight

]);

// original value is not changed bcoz in stack copy is created and then the change is done on the copy



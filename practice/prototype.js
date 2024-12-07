// Animal object (parent object)
function Animal(name) {
    this.name = name;  // This property will be inherited
}  

// The above animal function is a constructor function 


// function Animal(name) {
//     this.name = name;  // This property will be inherited

//     function speak(){
//         console.log(this.name + "makess a sound");
        
//     }
// }

// The above code is wrong bcoz writing a function inside a constructor makes it a normal function and not a instance method so if i want to make speak a method of animal i need to attack speak method to prototype of animal i.e Animal.prototype.speak  or use this.speak = function(){
// console.log(this.name + "makes a sound")} 
// the above one is not efficient bcoz each instance will get its own copy of method which is not memory efficient

// basically prototype is used to write properties and methods which will share among all the instances of that class 



Animal.prototype.speak = function() {
console.log(this.name + " makes a sound");  // This method will be inherited
};

Animal.prototype.eats = function() {
console.log(this.name + " eats food");  // This method will be inherited
};

Animal.prototype.eat = 'roti'



//the above one is efficient bcoz each instance of animal will share same method

// Dog object (child object)
function Dog(name) {
Animal.call(this, name);  // Inherit the 'name' property from Animal
}

// Set Dog's prototype to Animal's prototype, so Dog inherits Animal's methods
Dog.prototype = Object.create(Animal.prototype);

// Add a new method to Dog
Dog.prototype.speak = function() {
console.log(this.name + " barks");  // Overriding the 'speak' method
};

// Create a new Dog object
const dog = new Dog("Buddy");

dog.speak();  // Output: "Buddy barks"

console.log(Animal.prototype);
console.log(Object);

const ani = new Animal("Tommy");
ani.speak();
console.log(ani.eat);


  
  
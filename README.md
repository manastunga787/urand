#### This is a simple tiny library to generate unique random numbers between two integers (both inclusive) without repetion.
        npm install --save urand


```
const Urand = require("./index");

// supply two numbers to generate unique random numbers

const urand = new Urand(1, 3);

// this generates 3 unique random numbers from 1 to 3 (both inclusive) 

// to generate a unique random number;

console.log(urand.generate());

console.log(urand.generate());

console.log(urand.generate());

// after 3 random numbers between 1 to 3 further call to generate returns false

console.log(urand.generate());

// this prints false



const myRand = new Urand(1, 100);

for (let i = 1; i <= 100; i++) {

    // this will print 100 numbers between 1 to 100 (both inclusive) randomly without repetation

    console.log(myRand.generate());
}

```
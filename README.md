#### This is a simple tiny library to generate unique random numbers between two integers (both inclusive) without repetition.
        npm install --save xrand


```
const Xrand = require("xrand");

// supply two numbers to generate unique random numbers

const xrand = new Xrand(1, 3);
```
To generate random number call  ```xrand.generate()``` method

```
// to generate a number random number;

console.log(xrand.generate());

console.log(xrand.generate());

console.log(xrand.generate());
```

 after 3 random numbers between 1 to 3 further call to generate returns **false**


```
console.log(xrand.generate());

// this prints false
```

```
const myRand = new Xrand(1, 100);

for (let i = 1; i <= 100; i++) {

    // this will print 100 numbers between 1 to 100 (both inclusive) randomly without repetition

    console.log(myRand.generate());
}

// further call to myRand.generate() return false

console.log(myRand.generate());



```
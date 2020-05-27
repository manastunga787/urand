### This is a simple tiny library to generate numbers between two integers (both inclusive) randomly without repetition.

        npm install --save xrand


```javascript
const Xrand = require("xrand");

// supply two numbers to generate unique random numbers

const xrand = new Xrand(1, 3);
```
To generate random number call  `xrand.generate()` method

```javascript
// to generate a number random number;

console.log(xrand.generate());

console.log(xrand.generate());

console.log(xrand.generate());
```

 **after 3 random numbers between 1 to 3 further call to generate returns false**


```
console.log(xrand.generate());

// returns false
```

```javascript
const myRand = new Xrand(1, 100);

for (let i = 1; i <= 100; i++) {

    // this will print 100 numbers between 1 to 100 
    // (both inclusive) randomly without repetition
    
    console.log(myRand.generate());
}

// further call to myRand.generate() return false

console.log(myRand.generate());
```
To get all numbers between two integers randomly at once use `xrand.generateAll()`

```javascript
 const values = new Xrand(-5, 5).generateAll();
```
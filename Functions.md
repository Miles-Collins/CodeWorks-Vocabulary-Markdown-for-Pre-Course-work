# Functions

A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.It is like a reusable piece of code. Imagine , having 20 for loops ,and then having a single function to handle it all . To use a function, you must define it somewhere in the scope from which you wish to call it. A function definition (also called a function declaration) consists of the function keyword, followed by the name of the function, a list of arguments to the function, enclosed in parentheses and separated by commas, the JavaScript statements that define the function, enclosed in curly braces, { }.

### Syntax

```js script
function name(argument1, argument2 /* ..., argumentN */) {
  statement1;
  statement2;
  // ...
  statementN;
}
```

### Example

```js script
function greet(name) {
  return "Hello" + name + "!";
}
```

[Function Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

## Function calling

### Syntax

```js script
functionName(argument1, argument2, ..., argumentN);
```

### Example

```js script
greet("Anonymous");
// Hello Anonymous!
```

## Function hoisting

The two ways of declaring functions produce different results. Declaring a function one way “hoists” it to the top of the call, and makes it available before it’s actually defined.

### Example

```js script
hoistedFunction(); // Hello! I am defined immediately!
notHoistedFunction(); // ReferenceError: notHoistedFunction is not defined

function hoistedFunction() {
  console.log("Hello! I am defined immediately!");
}

var notHoistedFunction = function () {
  console.log("I am not defined immediately.");
};
```

# If statement

It simply states that if this condition is true, do this, else do something else (or nothing). It occurs in varied forms.

## If

### Syntax

```js script
// Form : Single If
if (condition) {
  // code that runs if the condition is true
}
```

### Example

```js script
if (answer === 42) {
  console.log("Told you so!");
}
```

[Use Conditional Logic with If Statements Use Conditional Logic with If Statements Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements)

[Comparison with the Equality Operator Practice](freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

[Comparison with the Strict Equality Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

[Practice comparing different values Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values)

[Comparison with the Inequality Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator)

[Comparison with the Strict Inequality Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator)

[Comparison with the Greater Than Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator)

[Comparison with the Greater Than Or Equal To Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator)

[Comparison with the Less Than Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator)

[Comparison with the Less Than Or Equal To Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator)

[Comparisons with the Logical And Operator Practice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator)

## Else

A fallback to an if statement. This will only get executed if the previous statement did not.

### Syntax

```js script
// If the condition is true, statement1 will be executed.
// Otherwise, statement2 will be executed.

if (condition) {
  // statement1: code that runs if condition is true
} else {
  // statement2: code that runs if condition is false
}
```

### Example

```js script
if (animal == "dog") {
  console.log("Bark, bark!");
} else {
  console.log("Meow");
}
```

## Else if

This is like an else statement, but with its own condition. It will only run if its condition is true, and the previous statement’s condition was false.

### Syntax:

```js script
// Form : else if. If the condition is true, statement1 will be executed. Otherwise, condition2 is checked. If it is true, then statement2 is executed. Else, if nothing is true, statement3 is executed.

if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else {
  statement3;
}
```

### Example

```js script
if (someNumber > 10) {
  console.log("Numbers larger than 10 are not allowed.");
} else if (someNumber < 0) {
  console.log("Negative numbers are not allowed.");
} else {
  console.log("Nice number!");
}
```

# Loops

## For Loops

You use for loops, if you know how often you’ll loop. The most often used varName in loops is i.

### Syntax

```js script
for ([let i = startValue]; [i < endValue]; [i+=stepValue]) {
  // Loop code here
}
```

### Example

```js script
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints the numbers from 0 to 4
}
```

### Example

```js script
let i; // 'outsourcing' the definition
for (i = 10; i >= 1; i--) {
  console.log(i); // Prints the numbers from 10 to 1
}
```

### Example

```js script
/* Note that all of the three statements are optional, i.e. , */
let i = 9;
// This loop is perfectly valid;
for (;;) {
  if (i === 0) {
    break;
  }
  console.log(i);
  i--;
}
```

## While Loops

You use while loops, if you don’t know how often you’ll loop.

### Syntax

```js script
while (condition) {
  // Your code here
}
```

### Example

```js script
let x = 0;
while (x < 5) {
  console.log(x); // Prints numbers from 0 to 4
  x++;
}
```

### Example

```js script
let x = 10;
while (x <= 5) {
  console.log(x); // Won't be executed
  x++;
}
```

## Do While Loops

You use do while loops, if you have to loop at least once, but if you don’t know how often.

### Syntax

```js script
do {
  // Your code here
} while (condition);
```

### Example

```js script
let x = 0;
do {
  console.log(x); // Prints numbers 0 to 4
  x++;
} while (x < 5);
```

### Example

```js script
let x = 10;
do {
  console.log(x); // Prints 10
  x++;
} while (x <= 5);
```

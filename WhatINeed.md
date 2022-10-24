# Pre-Course Vocab and Reference Sheet

## Basic Formatting

You can easily format text to be bold, italic, or underlined using simple formatting tags.

Example

```js script
This text is < b>bold</b >, <i >italicized</i>, and <u>underlined</u>.
```

## Headings

Heading elements like < h1 >, < h2 >, < h3 >, … allow you to use six levels of document headings, ranging from largest to smallest, breaking up the document into logical sections. For example, the word ‘Headings’ above is wrapped in a < h2 > tag.

Syntax

```js script
<h1> This is a header! </h1>
// Sets "This is a header!", to the largest header size.
```

## Properties

Properties are defined within selectors by defining a property and a value. They are separated with a colon and delineated with a semi-colon.

### Syntax

```js script
selector {
property: value;
}
```

### Example - Font Color

```js script
body {
color: blue;
// This will change the font color of everything in the body to blue.
}
```

### Example - Font Family

```js script
body {
  font-family: Times New Roman;
// This changes the font type of the body, to Times New Roman.
}
```

### Example - Background Color

```js script
body {
  background-color: purple;
// This changes the background of the entire body to purple.
}
```

### Example = Borders

```js script
body {
  border: solid;
  // Assigns the border to be solid.
  border-width: 1px;
  // Assigns the borders width to be 1px.
  border-color: black;
  // Assigns the border color to black.
  border: solid, 1px, black
  // Applies all of the above in one line.
  border-radius: 5%;
  // Apply's a roundness to the border edges.
}
```

## Class name selectors

You can also select HTML elements by their Class name. Unlike ID selectors, Class selectors select all elements with a matching class.

### Example

```js script
.newFont {
  font-size: 16px;
  font-family: Times New Roman;
  color: Blue;
}

// <p>This is a normal paragraph.</p>
// <p class="newFont">This paragraph is now in Times New Roman, blue, and 16 font size.</p>
//    ^^^^^^^^^^^^^^^ <--- Assigned the class newFont to the paragraph
```

## Variables, Data Types, and Mathematical Operators

- Variables — The var keyword indicates the creation of a variable.

- Data Types — 'New York City' is a string, 40.7 is a number, and true is a boolean.

- Mathematical Operators — The addition (+), subtraction (-), multiplication (\*), and division (/) characters function as mathematical operators.

```js script
let location = "New York City";
let latitude = 40.7;
let inNorthernHemisphere = true;
```

Practice Problem:

- [Assigning the Value of One Variable to Another](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another)

Each line in the example above begins with the keyword var. The var keyword is used to create a variable. The word that immediately follows var is the name of the variable. The variable’s name should describe the value that it stores (e.g. location).

Variables can store any data type, including:

- String — Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, the string 'New York City' is saved to the variable location.

- Number — Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, the number 40.7 is saved to the variable latitude.

- Boolean — Either true or false, with no quotations. In the example above, the variable inNorthernHemisphere is set to true. The sample code below contains examples of mathematical expressions:

```js script
let num1 = 4;
let num2 = 9;
let addNumbers = num1 + num2; // addNumbers equals 13
let subtractNumbers = num2 - num1; // subtractNumbers equals 5
let multiplyNumbers = num1 * num2; // multiplyNumbers equals 36
let divideNumbers = num2 / num1; // divideNumbers equals 2.25
```

Practice:

- [Add Two Numbers with JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-two-numbers-with-javascript)

- [Subtract One Number from Another with JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/subtract-one-number-from-another-with-javascript)

- [Multiply Two Numbers with JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-numbers-with-javascript)

- [Divide One Number by Another with JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/divide-one-number-by-another-with-javascript)

In the example above, the values saved to the variables were calculated using the addition (+), subtraction (-), multiplication (\*), and division (/) operators.

Variables always store the final value of the expression on the right side of the equals sign (=).

## Conditional Statements

Conditional statements (if, else if, and else) execute code if a set of conditions are met.
It’s often helpful to think about conditional statements in spoken language:

“If condition A is true, let’s follow a set of instructions, otherwise, if it is false, let’s do something else.”

This sentence is the equivalent of the following JavaScript conditional statement:

```js script
if (A) {
  //do something
} else {
  //do something else
}
```

Now, let’s consider a conditional statement that actually does something:

```js script
let inNortherHemisphere = true;
let latitude = 40.7;
if (latitude > 30 && inNorthernHemisphere) {
  console.log("It's cold in December!");
} else {
  console.log("It's not cold in December!");
}
```

In the example above, if a location has a latitude greater than 30 degrees and is in the Northern Hemisphere, then It's cold in December! will be logged to the console. If either condition is false, then the string It's not cold in December! will be logged to the console. Only one of the two strings will be logged to the console, but never both.

Conditional statements can also be used to check more than one condition:

```js script
let isPublicSchool = false;
let inState = true;
if (isPublicSchool && inState) {
  console.log("Student qualifies for in-state tuition.");
} else if (isPublicSchool || inState) {
  console.log("Student may qualify for financial support.");
} else {
  console.log("Student does not qualify for financial support.");
}
```

In the example above, the if/else if/else statement is used to check each condition, one after another. If isPublicSchool is true and inState is true, then the first block of code will execute. Otherwise, if isPublicSchool is true or inState is true, then the second block of code will execute. If neither condition is true, then the final block of code will execute.

In a conditional statement, the first condition that evaluates to true is the only block of code that executes. In the example above, if the first condition is true, then its code block will execute, and no other condition will be checked. This is important to note, because it is common for multiple expressions in a conditional statement to pass.

You are not limited to checking two conditions. You may use the else if keywords repeatedly to check as many conditions as you would like. For example, an if/else if/else if/else if/else if/else statement will check five conditions.

## Creating and using Loops

### For Loop

```js script
for (let i = 0; i < 4; i += 1) {
  console.log(i);
}

// Output: 0, 1, 2, 3
```

A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:

The initialization defines where to begin the loop by declaring (or referencing) the iterator variable
The stopping condition determines when to stop looping (when the expression evaluates to false)
The iteration statement updates the iterator each time the loop is completed

### Example

```js script
// Assign the variable "i" to where you want the loop to begin. For this example I started with 0.
// Then assign where you want the loop to stop at. In this example, I assigned the loop to stop when i is no longer less than 5.
// Lastly, the i++, is telling Javascript that at the end of each loop you want i to increase by 1.
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints the numbers from 0 to 4
}
//
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
for (i = 1; i <= 100; i++) {
  console.log(i);
}
// Console logs 1 through 100.
```

### You can also insert "if statements" into "for loops" to increase the function of your loops.

### Example

Insert an if statement into my for loop to say if (i divided by 2 equals 0(checks if number is even)) to console log the number.

```js script
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Logs all even numbers from 1 through 100.
```

### Example

You can also add an else statement to your loop.

```js script
for (i = 1; i <= 100; i++) {
  let isEven = i % 2 === 0;
  // Creates a variable to determine if "i" is even.
  console.log(isEven);
  // Outputs: True if i = 2,4,6,...,98
  // Outputs: False if i = 1,3,5,7,...,99
}
```

### Example

You can also use string interpolation to console.log your variable and a string.

```js script
for (i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log(i, "is divisible by 10.");
    // Outputs: 10,20,30,... is divisible by 10.
  }
}
```

### Example

You can also input equations into your if statements to filter your outputs.

```js script
for (i = 0; i <= 100; i++) {
  if (i >= 50) {
    console.log(i);
    // Outputs only numbers greater than or equal to 50, through 100.
  }
}
```

### Example

The next example with log all numbers less than 23, and say Michael Jordan; 24 and above Kobe.

```js script
for (i = 0; i <= 100; i++) {
  if (i <= 23) {
    console.log(i, "Michael Jordan");
    // Output: 1,2,3...,18,... Michael Jordan
  } else {
    console.log(i, "Kobe");
    // Output: 24,25,...,76,... Kobe
  }
}
```

### Example

You can also

```js script
console.log("Will you catch this Pokemon?");
for (i = 0; i <= 10; i++) {
  let success = Math.floor(Math.random() * 10);
  if (i === success) {
    console.log("Congratulations you caught the Pokemon.");
    console.log("It took,", i, "attempts.");
    break;
  } else {
    console.log("The Pokemon ran away...");
  }
}
```

### Accessing properties on an object

```js script
// First we need to set up variables to store the cost of our data

let withCheese = 1;
// Sets the variable "withCheese" to 1
let bacon = 2;
// Sets the variable "bacon" to 2
let burger = 3;
// Sets the variable "burger" to 3
let discount = 1.5;
// Sets the variable "discount" to 1.5

// Now we will create a variable outside of the function and set its value to 0
let total = 0;

// Now I need to increment total based on what I want to order.
total += burger; // This adds 3 to total setting total to 3.

total += bacon; // This adds 2 to the total. Total is now at 5.

total -= discount; // This subtracts 1.5 from total, leaving total at 3.5.

console.log(total); // Outputs 3.5

console.log("Your total is $" + total + "0."); // Outputs Your total is $3.50.

theDons();
```

You can use string interpolation to process ofand evaluating string literals containing one or more placeholders (expressions, variables, etc).

It can be performed using template literals: text ${expression} text.

Example

```js script
const trainer = {
  name: "Miles",
  pokemon: {
    name: "Charizard",
    type: "Fire, Flying",
  },
};

// Using string interpolation, you can tie variables together.

console.log(
  trainer.name, // Outputs: Miles
  "sends out", // Outputs: sends out
  trainer.pokemon.name, // Outputs: Charizard
  ".",
  `${trainer.pokemon.name} is type ${trainer.pokemon.type}, .` // Outputs: Charizard is type Fire, Flying.
  // Using the backtick "`", you can string interpolate variables in a normal sentence.
);

// The total output for the console.log() will be
// Miles sends out Charizard. Charizard is type Fire, Flying.
```

```js script
const Hokage = {
  name: {
    first: "Naruto",
    last: "Uzu maki",
  },
};
```

const cases = [
{ title: 'The Hound of the Baskervilles', releaseYear: 1901 },
{ title: 'The Adventure of the Empty House', releaseYear: 1903 },
{ title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
{ title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
{ title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

- Log the users mobile phone
- Log 'match' if the users home, mobile and work are all the same
- Combine and log in the first and last name of the user
- Ensure there is a space between the first and the last name

### Working with an array of objects

- Log each item in the 'cart' with its quantity
- Log the 'cart' total
- Iterate over the 'student' array to log the names and grade of each
- Iterate over the 'users' array and log the names and roles of each
- Iterate over the 'users' array and log only the names of 'instructors'
- Log the average grade for all students in the array

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
a.link {
  font-size: 12px;
}

/* HTML Selected: <a href="http://google.com" class="link">,
<a href="https://boisecodeworks.com/" class="link jumbo"> */
```

### Example

```js script
.jumbo {
  text-size: 1000px;
}

/* HTML Selected: <a href="https://boisecodeworks.com/" class="link jumbo">,
<span class="jumbo"> */
```

## Variables, Data Types, and Mathematical Operators

- Variables — The var keyword indicates the creation of a variable.

- Data Types — 'New York City' is a string, 40.7 is a number, and true is a boolean.

- Mathematical Operators — The addition (+), subtraction (-), multiplication (\*), and division (/) characters function as mathematical operators.

```js script
var location = "New York City";
var latitude = 40.7;
var inNorthernHemisphere = true;
```

[Assigning the Value of One Variable to Another](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another)

Each line in the example above begins with the keyword var. The var keyword is used to create a variable. The word that immediately follows var is the name of the variable. The variable’s name should describe the value that it stores (e.g. location).

Variables can store any data type, including:

- String — Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, the string 'New York City' is saved to the variable location.

- Number — Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, the number 40.7 is saved to the variable latitude.

- Boolean — Either true or false, with no quotations. In the example above, the variable inNorthernHemisphere is set to true. The sample code below contains examples of mathematical expressions:

```js script
var num1 = 4;
var num2 = 9;
var addNumbers = num1 + num2; // addNumbers equals 13
var subtractNumbers = num2 - num1; // subtractNumbers equals 5
var multiplyNumbers = num1 * num2; // multiplyNumbers equals 36
var divideNumbers = num2 / num1; // divideNumbers equals 2.25
```

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

Now, let’s consider a conditional statement that actualy does something:

```js script
var inNortherHemisphere = true;
var latitude = 40.7;
if (latitude > 30 && inNorthernHemisphere) {
  console.log("It's cold in December!");
} else {
  console.log("It's not cold in December!");
}
```

In the example above, if a location has a latitude greater than 30 degrees and is in the Northern Hemisphere, then It's cold in December! will be logged to the console. If either condition is false, then the string It's not cold in December! will be logged to the console. Only one of the two strings will be logged to the console, but never both.

Conditional statements can also be used to check more than one condition:

```js script
var isPublicSchool = false;
var inState = true;
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

- Log the numbers 25 through 50
- Log the numbers 0-10 using a for loop
- Log only the odd numbers
- Log the word 'odd' or 'even' based on the number
- Log only the numbers that are multiples of 5
- Log the numbers 0 up tot he variable used above
- Log only the numbers less than 24
- Log the word 'invalid' for all numbers greater than 24

### Accessing properties on an object

- Log the cost of an ice cream that has 1 scoop of vanilla and 1 scoop of rocky road
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

# Booleans

## Boolean literals

### Syntax:

```js script
true;
false;
```

## Boolean logical operators

### Syntax:

```js script
expression && expression2;
// Returns true if both the expression evaluate to true

expression3 || expression4;
// Returns true if either one of the expression evaluates to true

!expression5;
// Returns the opposite boolean value of the expression
```

### Example:

```js script
if (true && false) {
  // This bloc is not entered because the second expression is false
}

if (false || true) {
  // This block is entered because any one of the expression is true
}

if (!false) {
  // This block is entered because !false evaluates to true
}

!!true; // Evaluates to true
```

### Example:

```js script
if (!false && (false || (false && true))) {
  console.log("Guess what...");
}

/* Not executed because
!false && ( false || (false && true) ) - becomes
!false && ( false || false) - becomes
true && false, which is false
*/
```

### Example:

```js script
/* An important thing to note here is the Operator Precedence - which determines the order in which operators are evaluated. Operators with higher precedence are evaluated first. Thus among the four - () , && , || , ! */

// Brackets - have the highest precedence
// ! - lower than Brackets
// && - lower than !
// || - the lowest

if ((true && !!false) || true) {
  console.log("Guess again??");
}

/* Executed , here is the evaluation process -
true && !!false || true - becomes
true && false || true - (no brackets present , so ! evaluated ) becomes
false || true - (then && evaluated) which becomes true */
```

### Example:

```js script
/* Next important thing is Associativity - which determines the order in which operators of the same precedence are processed. For example, consider an expression: a * b * c. Left-associativity (left-to-right) means that it is processed as (a * b) * c, while right-associativity (right-to-left) means it is interpreted as a * (b * c). */

// Brackets , && , || have left to right associativity
// ! has right to left associativity

!false && !!false; // false
// evaluated in the manner - !false && false - true && false - false
```

## Comparison operators

### Syntax:

```js script
x === y; // Returns true if two things are equal
x !== y; // Returns true if two things are not equal
x <= y; // Returns true if x is less than or equal to y
x >= y; // Returns true if x is greater than or equal to y
x < y; // Returns true if x is less than y
x > y; // Returns true if x is greater than y
```

## “Truthy” and “Falsy”

Only Boolean literals (true and false) assert truth or false, but there are some other ways too to derive true or false. Have a look at the examples.

### Example:

```js script
if (1) {
  // Output 'True!', since any non-zero number is considered to be true
  console.log('True!');
}

if (0) {
  // Not executed, since 0 evaluates to falsy
  console.log('I doubt if this gets executed');
}

if ('Hello') {
  // Gets executed because non-empty strings are truthy
  console.log('So, any non-empty String is also true.');
}

if ('' {
  // Not executed
  console.log('Hence , an empty String is false');
})
```

## == vs. ===

A simple explanation would be that == does just value checking (no type checking ), whereas, === does both value checking and type checking. Seeing the examples may make it all clear. It is always advisable that you never use ==, because == often produces unwanted results.

### Syntax:

```js script
expression == expression;
expression === expression;
```

### Example:

```js script
"1" == 1; // true (same value)
"1" === 1; // false (not the same number)

true == 1; // true (because 1 evaluates as truthy, though it's not the same type)
true === 1; // false (not the same type)
```

# Strings

Strings are text. They are denoted by surrounding text with either single or double quotes.

### Syntax

```js script
"string of text";
"string of text";
```

## Concatenation

### Syntax

```js script
string1 + string2;
```

### Example

```js script
"some" + "text"; // returns 'sometext'
const first = "my";
const second = "string";
const union = first + second; // union variable is the string 'mystring'
```

[Concatenating Strings with Plus Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator)

## .length

Returns the length of the string.

### Syntax

```js script
string.length;
```

### Example

```js script
"My name".length; // 7 , white space is also counted
"".length; // 0
```

[Find the Length of a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string)

## .toUpperCase(), .toLowerCase()

Changes the cases of all the alphabetical letters in the string.

### Example

```js script
"my name".toUpperCase(); // Returns 'MY NAME'
"MY NAME".toLowerCase(); // Returns 'my name'
```

## .replace()

Returns a string with the first match substring replaced with a new substring.

### Example

```js script
"original string".replace("original", "replaced"); // returns 'replaced string'
```

## .charAt()

Returns the specified character from a string. Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character in a string called stringName is stringName.length - 1. If the index you supply is out of range, JavaScript returns an empty string.

### Syntax

```js script
string.charAt(index); // index is an integer between 0 and 1 less than the length of the string.
```

### Example

```js script
"Hello World!".charAt(0); // 'H'
"Hello World!".charAt(234); // ''
```

[Use Bracket Notation to Find the First Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string)

[Use Bracket Notation to Find the Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-last-character-in-a-string)

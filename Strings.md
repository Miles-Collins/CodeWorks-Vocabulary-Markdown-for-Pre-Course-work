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

## .trim()

Removes whitespace from both ends of the string.

### Syntax

```js script
string.trim();
```

### Example

```js script
" a ".trim(); // 'a'
" a a ".trim(); // 'a a'
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
.replace()
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

## .substring()

Returns the sequence of characters between two indices within a string.

### Syntax

string.substring(indexA[, indexB])
// indexA : An integer between 0 and the length of the string
// indexB : (optional) An integer between 0 and the length of the string.

### Example

```js script
"adventures".substring(2, 9); // Returns 'venture'
// substring starts from indexA(2) , and goes up to but not including indexB(9)
"hello".substring(1); // returns 'ello'
"Web Fundamentals".substring(111); // returns ''
"In the market".substring(2, 999); // returns ' the market'
"Fast and efficient".substring(3, 3); // returns ''
"Go away".substring("abcd", 5); // returns 'Go aw'
// Any non-numeric thing is treated as 0
```

## .indexOf()

Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex, Returns -1 if the value is not found. The .indexOf() method is case sensitive.

### Syntax

string.indexOf(searchValue[, fromIndex]) // fromIndex is optional. It specifies from which index should the search start.Its default value is 0.

### Example

```js script
'My name is very long.'.indexOf('name'); // returns 3
'My name is very long.'.indexOf('Name'); // returns -1 , it's case sensitive
'Where are you going?'.indexOf('are', 11); //returns -1
'Learn to Code'.indexOf(''); //returns 0
'Learn to Code'.indexOf('', 3); //returns 3
'Learn to Code'.indexOf('', 229); returns 13 , which is the string.length
```

# Arrays

## Accessing array elements

You can get elements out of arrays if you know their index. Array elements’ indices start at 0 and increment by 1, so the first element’s index is 0, the second element’s index is 1, the third element’s index is 2, etc.

### Syntax:

```js script
array[index];
```

### Example:

```js script
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
primes[0]; // 2
primes[3]; // 7
primes[150]; // undefined
```

### Practice: [Access Array Data with Indexes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes)

## Array literals

You can create arrays in two different ways. The most common of which is to list values in a pair of square brackets. JavaScript arrays can contain any types of values and they can be of mixed types.

### Syntax:

```js script
const arrayName = [element0, element1, ..., elementN]
```

### Example:

```js script
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
```

### Practice: []()

## Multi-dimensional Arrays

A two-dimensional array is an array within an array. If you fill this array with another array you get a three-dimensional array and so on.

### Example:

```js script
// Two dimension, 3x3
const multidimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

### Practice: [Nest one Array within Another Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)

## Array constructor

You can also create an array using the Array constructor.

### Example:

```js script
const stuff = new Array();

stuff[0] = 34;
stuff[4] = 20;

stuff;
// [34, undefined, undefined, undefined, 20]
```

### Example:

```js script
const myArray = new Array(45, "Hello World!", true, 3.2, undefined);
console.log(myArray);

// output: [ 45, 'Hello World!', true, 3.2, undefined ]
```

### Practice: []()

## Accessing nested array elements

Accessing multi-dimensional array elements is quite similar to one-dimension arrays. They are accessed by using [index][index]….. (number of them depends upon the number of arrays deep you want to go inside).

### Syntax:

```js script
array[index][index]; //...
```

### Example:

```js script
const myMultiArray = [
  [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]],
  [6, 7, 8, 9, 10, [1, 2, 3, 4, 5]],
  [11, 12, 13, 14, 15, [1, 2, 3, 4, 5]],
  [16, 17, 18, 19, 20, [1, 2, 3, 4, 5]],
];

console.log(myMultiArray[1][5][4]);
// Outputs 5, the value in the last element of the last element of the second element of myMultiArray.
```

### Practice: [Access Multi-Dimensional Arrays With Indexes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes)

## Manipulating Arrays

### Practice: [Manipulate Arrays With push()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push)

### Practice: [Manipulate Arrays With pop()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop)

### Practice: [Manipulate Arrays With shift()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift)

### Practice: [Manipulate Arrays With unshift()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift)

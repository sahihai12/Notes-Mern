---
id: js-practical-questions 
title: Practical Questions
---

### Sorting based on Key

```js
const arr = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Alice', age: 25 },
  { id: 3, name: 'Bob', age: 35 },
];

// Sorting by the 'age' property in ascending order
arr.sort((a, b) => a.age - b.age);

console.log(arr);

// Sorting by the 'name' property in alphabetical order
arr.sort((a, b) => a.name.localeCompare(b.name));

console.log(arr);

```

### Find the Occurrences of a Given Number

```js

function countOccurrences(arr, target) {
    let count = 0;

    arr.forEach(num => {
        if (num === target) {
            count++;
        }
    });

    return count;
}

// Example usage:
const numbersArray = [1, 3, 2, 3, 1, 4, 5, 3, 2, 1];
const targetNumber = 3;
const occurrences = countOccurrences(numbersArray, targetNumber);
console.log(`Occurrences of ${targetNumber}: ${occurrences}`);

```


### Find the Number with the Most Occurrences

```js
function findMostFrequent(arr) {
    const frequencyMap = {};
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
    let maxCount = 0;
    let mostFrequentNum = null;
    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentNum = num;
        }
    }
    return {
        number: mostFrequentNum,
        occurrences: maxCount
    };
}
const numbers = [1, 3, 2, 3, 1, 4, 5, 3, 2, 1];
const result = findMostFrequent(numbers);

```


### Find balance point
> const arr = [1, 7, 3, 6, 5, 6] , [2, 2, 2, 2, 2, 2] , [1, 0, -1, 0 ], [0, -1, 1, 0 ],[2, 1, -1, 2, 1, -1, 2 ], [1, 2, 3, 4, 5]

```js title="Approach time-complexity O(n2)"
function findBalancePoint(arr) {
  if (!arr.length) return -1;
  for (let i = 0; i < arr.length; i++) {
    let lSum = 0;
    let rSum = 0;
    for (let j = 0; j < i; j++) {
      lSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      rSum += arr[k];
    }
    if (lSum == rSum) {
      return i;
    }
  }
  return -1;
}

console.log(findBalancePoint(arr));

```

```js title="Approach 2 time-complexity O(n)"
function findBalancePoint(arr) {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  let lSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Calculate the right sum by subtracting left sum and current element from total sum
    const rSum = totalSum - lSum - arr[i];

    if (lSum === rSum) {
      return i; // Balance point found
    }

    // Update left sum for the next iteration
    lSum += arr[i];
  }

  return -1; // No balance point found
}

// Example usage
const arr = [1, 2, 3, 4, 6];
console.log(findBalancePoint(arr)); // Output: 3

```


### Remove Duplicate Str from str1

```js
let string1 = "I am a JavaScript developer"
let string2 = "JavaScript is the programming language"

let arrStr1 = string1.split(' ');
let result = '';

for (let i = 0; i < arrStr1.length; i++) {
    if (!string2.split(' ').includes(`${arrStr1[i]}`)) {
        result += `${arrStr1[i]} `
    }
}
console.log(result) // I am a developer 

```

### Filter on arr of object value

```js
const data = [
  { name: 'Alice', scores: [10, 20, 30, 40] },
  { name: 'Bob', scores: [15, 25, 35, 45] },
  { name: 'Charlie', scores: [20, 30, 40, 50] },
];

let result = [];

for (let i = 0; i < data.length; i++) {
  const highScores = data[i].scores.filter(el => el > 30);
  result.push({
    name: data[i].name,
    highScores: [...highScores],
  });
}
console.log(result);
```

### Using recusrion find sum of n

```js
function sumOfn(n){
  if(n <= 1) return n
  return sumOfn(n-1) + n
}

console.log(sumOfn(3))
```



### Find factorial of n using recursion 


```js
function factorail(n) {
  if (n == 0 || n ==1 ) return n;
  return n * factorail(n - 1);
}

console.log(factorail(5));
```

### Is Subsequence

```js title="Link : https://leetcode.com/problems/is-subsequence/"
var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  }
  if (i == s.length) {
    return true;
  } else {
    return false;
  }
};

```

### o/p Questions 
```js
function call() {
    return Promise.resolve();
}

call()
    .then(function first() {console.log(1)})
    .then(function first() {console.log(2)})
    .then(function first() {console.log(3)});
    
call()
    .then(function first() {console.log(4)})
    .then(function first() {console.log(5)})
    .then(function first() {console.log(6)}); 

```


### Reverse a string 

```js 
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example
console.log(reverseString("hello")); // Output: "olleh"

```

### Sum of n using recursion
```js 
function sumOfN(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumOfN(n - 1);
}

// Example
console.log(sumOfN(5)); // Output: 15 (5 + 4 + 3 + 2 + 1)
```

### Find the character with the highest occurrence in a string

```js 
const str = "javascript";

function maxCharOccurrence(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return { maxChar, maxCount };
}

// Example
console.log(maxCharOccurrence(str)); // Output: { maxChar: 'a', maxCount: 2 }
```


### Group an array of objects by a specific key

```js
const items = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'vegetable', name: 'spinach' }
];

function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}

// Example
console.log(groupBy(items, 'category')); 
```




### Write a code for applying searching in 2d array without linear search. 
```js
function searchIn2DArray(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Start from the top-right corner
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return `Found at (${row}, ${col})`;
    } else if (matrix[row][col] > target) {
      col--; // Move left
    } else {
      row++; // Move down
    }
  }

  return "Not found";
}

// Example usage:
const matrix = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17]
];
console.log(searchIn2DArray(matrix, 5)); // Output: Found at (1, 1)
console.log(searchIn2DArray(matrix, 15)); // Output: Not found

```

### Write a code for swap to string without using temp variable  
```js 
function swapStrings(a, b) {
  console.log("Before swap: a =", a, ", b =", b);

  // Concatenate a and b, then separate them
  a = a + b;      // Now a contains both strings
  b = a.slice(0, a.length - b.length);  // b is assigned the first part of a (original a)
  a = a.slice(b.length);                // a is now assigned the second part (original b)

  console.log("After swap: a =", a, ", b =", b);
}

// Example usage:
let str1 = "Hello";
let str2 = "World";
swapStrings(str1, str2);

```


### Object.GroupBy
```js 
const users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Chicago" },
  { name: "Charlie", age: 25, city: "New York" },
  { name: "David", age: 30, city: "Chicago" },
  { name: "Eve", age: 35, city: "San Francisco" },
];

const result = Object.groupBy(users , ({age}) => age)
console.log(result)
```

```js title="Approach 2"
const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    const groupKey = currentValue[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentValue);
    return result;
  }, {});
};

const groupedByAge = groupBy(users, 'age');
console.log(groupedByAge);
```


## Find Output

```js
const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = () => {
      console.log(this);
    };
    eatFruit();
  },
};
user.eat();

// 1: {name: "John", eat: f}, {name: "John", eat: f}
// 2: Window {...}, Window {...}
// 3: {name: "John", eat: f}, undefined
// 4: {name: "John", eat: f}, Window {...}
```

```js
function second() {
  var message;
  console.log(message);
}

function first() {
  var message = "first";
  second();
  console.log(message);
}

var message = "default";
first();
console.log(message);

// 1: undefined, first, default
// 2: default, default, default
// 3: first, first, default
// 4: undefined, undefined, undefined
```

```js
var of = ["of"];
for (var of of of) {
  console.log(of);
}
```

```js
console.log(null || 'myname')
console.log(null && 'myname')
console.log(null ?? 'myname')
```

```js
add()
var a  = 5;
function add() {console.log(a) }
```

```js
function call() {
    return Promise.resolve();
}
call()
    .then(function first() {console.log(1)})
    .then(function first() {console.log(2)})
    .then(function first() {console.log(3)});
    
call()
    .then(function first() {console.log(4)})
    .then(function first() {console.log(5)})
    .then(function first() {console.log(6)});
```

```js
const obj = {
    name: 'sahil',
    arrow : () => {return this.name},
    inline : function(){return this.name}
}


console.log(obj.inline())
console.log(obj.arrow())
var x  = obj.inline
console.log(x())

```

```js
```

```js
```

```js
```

```js
```


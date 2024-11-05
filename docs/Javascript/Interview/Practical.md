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


### Find ballance point
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


:::tip[My tip]
// Assignent - 7


// Q1 :- Write a program to check is a given number is
// even or odd
// positive, negative or zero

//ANS :---

// even or odd
function number(nums){
    if (nums % 2 ==0){
        console.log(`this is the even number...`)
    }
    else {
        console.log(`this is the odd number`)
    }
}
number(44)
//Output -- this is the even number... 

// --- positive, negative or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}



checkNumber(-44);

//--Output 
// The number is negative.

// Q2 Write a program to calculate the sum of the first N natural numbers

// Ans :--

function calculateSum(N) {
    if (N <= 0) {
        return 0; 
    }
    return (N * (N + 1)) / 2; 
}


const N = 20; 
const sum = calculateSum(N);
console.log(`The sum of the first ${N} natural numbers is: ${sum}`);

// Output
// The sum of the first 20 natural numbers is: 210


// Q3 Write a program to calculate the factorial of a given number

function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers."
    return n === 0 ? 1 : n * factorial(n - 1);
}


console.log(`The factorial of 25 is: ${factorial(25)}`) 
// Output :- The factorial of 25 is: 1.5511210043330986e

// Q 4 :- Write a program to find factors of a given number 
// Ans :-
function findFactors(num) {
    let factors = [];
    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }
    return factors
}
number = 9
factorsOfNumber = findFactors(number)
console.log("Factors of " + number + ":", factorsOfNumber)

//  Output :- Factors of 9: (3) [1, 3, 9]

//  Q 5. Write a program to check if an input number is prime or not

function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

numberToCheck = 9;
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " is a prime number.");
} else {
    console.log(numberToCheck + " is not a prime number.");
}

// Output 
// 9 is not a prime number.

//  Q 6. Write a program to generate the Fibonacci sequence up to a given number of terms

// ans:-

function generateFibonacci(n) {
    let fibonacciSequence = [];
    
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        fibonacciSequence.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    
    return fibonacciSequence;
}
const terms = 25; 
const fibonacciSeries = generateFibonacci(terms);
console.log(`The first ${terms} terms of the Fibonacci sequence are:`);
console.log(fibonacciSeries.join(", "));

//Q 7. Write a program to check if an input string is a palindrome
// ans:-

const str = "AAI"; 
const isPalindrome = str === str.split('').reverse().join('');

console.log(isPalindrome ? `"${str}" is a palindrome.` : `"${str}" is not a palindrome.`);

//Q 8. Write a program to find the sum of digits of an input number
// Ans :

const sumOfDigits = num => {
    return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0)
};


const inputNumber = 8765498654432
console.log(`The sum of the digits of ${inputNumber} is: ${sumOfDigits(inputNumber)}`)

// Output 
// The sum of the digits of 8765498654432 is: 71


// 9.Write a program to check if an input number is an Armstrong number
// Ans :-

function isArmstrongNumber(num) {
    
    const digits = String(num).split('');
    
    const numberOfDigits = digits.length;
    
    const sum = digits.reduce(function(check, digit) {
        return check + Math.pow(Number(digit), numberOfDigits);
    }, 0);
    
    return sum === num;
}

const num = 453; 

if (isArmstrongNumber(num)) {
    console.log(num + " is an Armstrong number.");
} else {
    console.log(num + " is not an Armstrong number.");
}

// Output:-
// 453 is not an Armstrong number.

//10. Write a program to check if an input year is a leap year

// Ans :-
function LeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true 
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

year = 2004 
if (LeapYear(year)) {
    console.log(year + " is a leap year.")
} else {
    console.log(year + " is not a leap year.")
}
//  Output:-
// 2004 is a leap year.

// Write a program to find the greatest common divisor (GCD) of two input numbers
// Ans:-


function GCD(a, b) {
    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

num1 = 2
num2 = 8

gcd = GCD(num1, num2)
console.log("The GCD of " + num1 + " and " + num2 + " is " + gcd + ".")

// Output
// The GCD of 2 and 8 is 2.

// 12.Write a program to find the least common multiple (LCM) of two input numbers
// JavaScript program to find LCM of 2 numbers 
// without using GCD 

// Function to return LCM of two numbers 
function findLCM(a, b) {
    let i = a > b ? a : b
    while (true) {
        if (i % a === 0 && i % b === 0) {
            return i
        }
        i += a > b ? a : b
    }
}

let a = 2
let b = 4
console.log("LCM of " + a + " and " + b + " is " + findLCM(a, b))

// Output
// LCM of 2 and 4 is 4

// 13.Write a program to check two strings are anagrams
function Anagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("It is Anagram");
    } else { 
       console.log("It is not Anagram");
    }
 }
 Anagram("Angel","Angle")
//output It is Anagram

// Q 14 
// Ans :-
function areNumbersStrictlyIncreasing(s) {
    const numbers = s.match(/\d+/g).map(Number); 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) return false; 
    }
    return true;
}

const inputString = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
console.log(areNumbersStrictlyIncreasing(inputString)); 

// Q 15
// ans 
function missingNumber(nums) {
    const n = nums.length;  
    const expectedSum = (n * (n + 1)) / 2;  
    const actualSum = nums.reduce((sum, num) => sum + num, 0);  
    return expectedSum - actualSum;  
}

const nums = [0, 1];
console.log(missingNumber(nums));  
// Output
// 2
// Live reload enabled.











//1. Create a function that accepts only 2 parameters
// and throw exception if number of parameters either less than or exceeds 2 parameters.

function checkParameters(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Function accepts only 2 parameters");
    }
    return `a is ${a}, b is ${b}`;
}

console.log(checkParameters(1, 2));
// console.log(checkParameters(1, 2, 3));
console.log(checkParameters(1));


//------------------------------------------------------------------------------------------------------
//2.Write your own function that can add n values
// ensure that all passing parameters are numerical values only.

function sum(...num) {
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            alert("All parameters must be numerical values");
            return "All parameters must be numerical values";
        }
        //sum is sum of all numbers
        sum += num[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5,6,7,8,9,10));
// console.log(sum(1, 2, 3, 4, 'five'));
// console.log(sum("s", "e"));

//-------------Another Answer [2]-------------
function sumAllNumbers() {
    let sum = 0;
    let num;
    while (true) {
        num = prompt("Enter a number (or '=' to finish):");
        if (num === '=') {
            break;
        }
        if (isNaN(num)) {
            alert("You must enter a number");
            continue;
        }
        sum += Number(num);
    }
     alert(`The total sum is: ${sum}`);
     return sum;
}

sumAllNumbers();

//______________________________________________________________________________________
//3. Write a function that takes any number of parameters
// and returns them reversed
// using array’s reverse function.

function reverse(...num) {

    return num.reverse();
}
console.log(reverse(1, 2, 3, 4, 5));



//______________________________Another Answer [3]________________________________________________________
function reverseArray() {
    let array = [];
    let input;
    while (true) {
        input = prompt("Enter a number (or '00' to stop):");
        if (input === '00') {
            break;
        }
        array.push(input);
    }
    
    let reversedArray = array.reverse().join(" , ");
     alert(`Reversed Array: ${reversedArray}`);
    return reversedArray;


}
reverseArray();


//______________________________________________________________________________________
//make function isPrime()
// to check if the number is prime or not.

function isPrime(num) {
    if (num <= 1) {
        return `The number ${num}  is not prime`;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `The number ${num} is not prime`;
        }
    }
    return `The number ${num}  is prime`;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(5));
console.log(isPrime(12));
console.log(isPrime(100));
console.log(isPrime(0));


//_______________________________Another Answer [4]_______________________________________________________
function isPrimeNum() {
    let num;
    
    while (true) {
        num = prompt("Enter a number (or '=' to stop):");
        if (num === '=') {
            break;
        }
        if (isNaN(num)) {
            alert("You must enter a number");
            continue;
        }
        if (num <= 1) {
            // alert(`${num} is not prime`);
            prime = false;
            continue;
        }
        let prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                // alert(`${num} is not prime`);
                prime = false;
                continue;
            }
        }
        if (prime) {
             alert(`${num} is prime`);
        } else {
            alert(`${num} is not prime`);
        }
    }
  
}
 isPrimeNum();  


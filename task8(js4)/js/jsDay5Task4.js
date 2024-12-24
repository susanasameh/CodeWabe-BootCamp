//1.Write a script to determine whether the entered string is palindrome or not.
// Ask the user whether to consider case of the entered string or not,
// handleboth cases in your script i.e. RADAR NOON MOOM are palindrome.
//  Note: raDaR is not a palindrome if user requested considering case of entered string.


let str = prompt("Enter a string to check if it's a palindrome:");
let caseSensitive = confirm("Do you want to consider case of the entered string?");
if (!caseSensitive) {
    str = str.toLowerCase();

}

let reverseStr = str.split("").reverse().join("");
if (str === reverseStr) {
    console.log(str + " is a palindrome");
    } else {
    console.log(str + " is not a palindrome");
}

//2 .write a script that accepts a string from user through prompt
// and count the number of ‘e’ characters in it.

let userInput = prompt("Enter a string containing 'e' characters:");
let count = 0;
for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === 'e') {
        count++;
    }
}
console.log("Number of 'e' characters in the string: " + count);

//3 .Write a script that reads from the user his info;
// validates and displays it with a welcoming message.
function welcomingMessage() {
    let name, age, country;
    while (true) {
        name = prompt("Enter your name:");
        age = prompt("Enter your age:");
        country = prompt("Enter your country:");
        
        if (!name || !age || !country) {
          alert("Please enter all the required fields");
          continue;
        }

        if (isNaN(age) || age <= 0) {
          alert("Please enter a valid age.");
          continue;
        }
        break;

    }


    alert(`Welcome ${name}! You are ${age} years old and live in ${country}.`);

}

welcomingMessage();

//4 .Write a script that ask the user to Enter the value of a circle’s radius
//  in order to calculate its area.

function calculateCircleArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    const circleArea = Math.PI * (radius ** 2);
    alert(`The area of the circle with radius ${radius} is ${circleArea}.`);
}

calculateCircleArea();

//5. Enter another value to calculate its square root
// and alert the result.

function calculateSquareRoot() {
    const number = parseFloat(prompt("Enter a number:"));
    const squareRoot = Math.sqrt(number);
    alert(`The square root of ${number} is ${squareRoot}.`);
}
calculateSquareRoot();



//  Task1 Write a script that takes from the user n values and returns their sum,
// stop receiving values from user when he enters 0 or sumexceeds 100,
// check that the entered data is numeric and inform the user with the total sum of the entered values.
// (use do whileloop)

let sum = 0;
let n;

do {
    n = Number(prompt(`Please Enter a number: \n *Press 0 to stop the operation`));    
    if (isNaN(n)) {
        alert('Please enter a valid number.');
        continue;
    }
    if (n === 0) {
        break;
    }
    sum += n;

    document.getElementById("quest-1").innerHTML = `<h3 class="h3Style">Sum of Numbers = ${sum}</h3>`;

} while (sum <= 100);


//------------2-----------------------
//Task2On your page, show alert for the user that say “Welcome to my site”,
//  then show him prompt ask him to enter his name The user has to choose either (red, green or blue color),
//  take his choice via prompt and write to the page “welcome + his name”

alert('Welcome to our website🥰');
let welcomeName = prompt('Please enter your name');

let favoriteColor = prompt(
  "Please enter your favorite color /n (red, green or blue color),"
);
let color = ['red', 'green', 'blue'];
if (!color.includes(favoriteColor.toLowerCase())) {
  alert("The color is invalid");
  favoriteColor = 'black';
}


let message = document.getElementById("quest-2")
if (message) {
    message.innerHTML = `<h3 class="h3Style">Welcome  <span class="nameStyle">${welcomeName}</span> to our website 🤞</h3>`; 
    message.style.backgroundColor = favoriteColor;
} 


if (favoriteColor.toLowerCase() === "black") {
    message.style.color = "white";
}

// Task3
// Ask the user to enter a message
// then display it using the different html heading tags (from <h1> to <h6>) using Loops.
// DO NOT write the header element explicitly in your script.
// console.log(task3);

let headingMessage = prompt('Please enter a message');
for (let i = 1; i <= 6; i++) {
    document.getElementById("quest-3").innerHTML += `<div><h${i}>${headingMessage}</h${i + 1}></div>`;

}

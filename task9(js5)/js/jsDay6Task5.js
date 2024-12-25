function calculateNum() {
    let sum = 0;
    let divide = 0;
    let multiply = 0;

    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let num3 = Number(prompt("Enter the third number:"));

    while (true) {
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Please enter valid numbers.");
            continue;
        }
        if (num1 == 0 || num2 == 0 || num3 == 0) {
            alert("Please enter non-zero numbers.");
            continue;
        }
        sum = num1 + num2 + num3;
        divide = num1 / num2 / num3;
        multiply = num1 * num2 * num3;
        alert(`The sum of the numbers is: ${sum}`);
        alert(`The divide of the numbers is: ${divide}`);
        alert(`The multiply of the numbers is: ${multiply}`);
        break;
       

    }

 let sumResult = document.getElementById("sumResult");
 let divideResult = document.getElementById("divideResult");
 let multiplyResult = document.getElementById("multiplyResult");

     
    sumResult.innerHTML = `The sum of the numbers is:<br>${num1}  + ${num2}    + ${num3} = ${sum}`;
           sumResult.style.color = "lightblue";

divideResult.innerHTML = `The divide of the numbers is:<br>${num1} / ${num2} / ${num3} = ${divide}`;
  divideResult.style.color = "pink";
       multiplyResult.innerHTML = `The multiply of the numbers is: <br>${num1} * ${num2} * ${num3} = ${multiply}`;
       multiplyResult.style.color = "lightgreen";

}

calculateNum();


//-------------Another Answer-------------
function calculateNumber() {
    let sum = 0;
    let divide = 0;
    let multiply = 0;

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let sumResultInput = document.getElementById("sumResultInput");
    let divideResultInput = document.getElementById("divideResultInput");
    let multiplyResultInput = document.getElementById("multiplyResultInput");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid numbers.");
        return;
    }
    if (num1 == 0 || num2 == 0 || num3 == 0
    ) {
        alert("Please enter non-zero numbers.");
        return;
    }
    sum = num1 + num2 + num3;
    divide = num1 / num2 / num3;
    multiply = num1 * num2 * num3;
    sumResultInput.innerHTML = `The sum of the numbers is: 
    <br> ${num1}  + ${num2}    + ${num3} = ${sum}`;
    sumResultInput.style.color = "lightblue";

    divideResultInput.innerHTML = `The divide of the numbers is: <br>${num1} / ${num2} / ${num3} = ${divide}`;
    divideResultInput.style.color = "pink";

    multiplyResultInput.innerHTML = `The multiply of the numbers is: <br>${num1} * ${num2} * ${num3} = ${multiply}`;
    multiplyResultInput.style.color = "lightgreen";

    clearInputs();
}

function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
}

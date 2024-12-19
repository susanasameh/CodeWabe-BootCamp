//________________________1__________________________

// Select the display element
const display = document.getElementById('display');

// Initialize variables to store calculator state
let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let shouldResetDisplay = false;

// Function to update the display
function updateDisplay(value) {
    if (shouldResetDisplay) {
        display.value = value;
        shouldResetDisplay = false;
    } else {
        display.value += value;
    }
}

// Function to clear the display and reset all values
function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    shouldResetDisplay = false;
}

// Function to handle operator buttons (+, -, *, /, %)
function handleOperator(operator) {
    if (currentOperator && secondOperand) {
        firstOperand = performCalculation();
        secondOperand = '';
    } else {
        firstOperand = display.value;
    }
    currentOperator = operator;
    shouldResetDisplay = true;
}

// Function to perform the calculation
function performCalculation() {
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand || display.value);

    if (isNaN(a) || isNaN(b)) return '';

    let result;
   switch (currentOperator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Error';
            break;
        case '%':
            result = a % b;
            break;
        default:
            return '';
    }

    return result.toString();
}

// Function to handle equal (=) button
function handleEquals() {
    if (!currentOperator || !firstOperand) return;

    secondOperand = display.value;
    display.value = performCalculation();
    currentOperator = '';
    shouldResetDisplay = true;
}

// Function to handle decimal (.)
function handleDecimal() {
    if (shouldResetDisplay) {
        display.value = '0.';
        shouldResetDisplay = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (!isNaN(buttonValue)) {
        // If the button is a number
        updateDisplay(buttonValue);
    } else if (buttonValue === 'c') {
        // Clear the display
        clearDisplay();
    } else if (['+', '-', '*', '/', '%'].includes(buttonValue)) {
        // Handle operators
        handleOperator(buttonValue);
    } else if (buttonValue === '=') {
        // Handle equals button
        handleEquals();
    } else if (buttonValue === '.') {
        // Handle decimal point
        handleDecimal();
    }
}

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});


//------------------------2-------------------------

function calculateArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    document.getElementById("result-1").textContent = "The number is not correct";
    return;
  }

  const area = length * width;
  console.log(area);
   document.getElementById("result-1").textContent = `Area = ${area}`;
   
}

function calculatePerimeter() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    document.getElementById("result-2").textContent =
      "The number is not correct";
    return;
  }

  const perimeter = 2 * (length + width);
   document.getElementById("result-2").textContent = `Perimeter = ${perimeter}`;
   
}

function calculateRectangle() {

   calculateArea();
   calculatePerimeter();
   clearInputs();
   
}



function clearInputs(){
   document.getElementById("length").value = "";
   document.getElementById("width").value = "";
}

//------------------------3-------------------------

function calculateCircle() {
   calculateDiameter();
   calculateCircleArea();
   calculateCircumference();
   clearInputs();

}
function calculateDiameter() {
   const radius = parseFloat(document.getElementById("radius").value);
   const diameter = 2 * radius;
   document.getElementById("result-5").textContent = `Diameter = ${diameter}`;
}

function calculateCircleArea() {
   const radius = parseFloat(document.getElementById("radius").value);
   const circleArea = Math.PI * (radius ** 2);
   document.getElementById("result-3").textContent = `Area = ${circleArea}`;

}

function calculateCircumference() {
   const radius = parseFloat(document.getElementById("radius").value);
   const circumference = 2 * Math.PI * radius;
   document.getElementById("result-4").textContent = `Circumference = ${circumference}`;
}

function clearInputs() {
   document.getElementById("radius").value = "";
   
}








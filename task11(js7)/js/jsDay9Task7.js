function calculateData() {
  let numOfPersons = Number(prompt("Enter the number of persons:"));

  // Validate the number of persons
  while (isNaN(numOfPersons) || numOfPersons <= 0) {
    alert("Please enter a valid positive number.");
    numOfPersons = Number(prompt("Enter the number of persons:"));
  }

  // Loop through the number of persons
  for (let i = 0; i < numOfPersons; i++) {
    let name, age;

    // Name Validation Loop
    while (true) {
      name = prompt(`Enter the name of person ${i + 1}:`);
      if (name && name.length >= 3 && name.length <= 10) {
        break;
      } else {
        alert("Name must be between 3 and 10 characters.");
      }
    }

    // Age Validation Loop
    while (true) {
      age = Number(prompt(`Enter the age of person ${i + 1}:`));
      if (!isNaN(age) && age >= 10 && age <= 60) {
        break;
      } else {
        alert("Age must be between 11 and 59.");
      }
    }

    // Display data in the table after successful validation
    document.getElementById("table").innerHTML += `
            <tr>
                <td class="name">${name}</td>
                <td class="age">${age}</td>
            </tr>`;

    
    console.log(name, age);
  }
}

calculateData();

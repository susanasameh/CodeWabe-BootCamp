// 1.Setter and Getter Methods
// Explain what setters and getters are.
// Provide an example of their use in Js

// Setters and getters are special methods in JavaScript that allow you to control the access and behavior of properties. They are used to encapsulate data and provide additional functionality.
// بمنتهى البساطة لما يكون عندى خاصية private
//علشان اقدر اتعامل مع الخاصية دي بستخدم 
// Getter: بيجيبلك قيمة الخاصية دي.
// Setter: بيسمحلك تغير قيمة الخاصية دي، بس ممكن تحط شوية قواعد عشان تتأكد إن القيم اللي داخلة صح.

class Employee {
  name;
  age;
  #salary;

  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.#salary = salary;
  }

  set salary(salary) {
    if (salary < 3000) {
      this.#salary = 3000;
    } else {
      this.#salary = salary;
    }
  }

  get salary() {
    // console.log(this.#salary);
    return this.#salary;
  }


}

let employee1 = new Employee("John", 30, 5000);

let employee2 = new Employee();
employee2.name = "Jane";
employee2.age = 25;
employee2.salary = 2000;

console.log("the salary of employee 1 is:", employee1.salary, "and the salary of employee 2 is:", employee2.salary);















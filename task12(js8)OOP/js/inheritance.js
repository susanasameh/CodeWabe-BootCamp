//3.Inheritance
// Explain the concept of inheritance and how it is used in Js.
// Demonstrate it with a simple example.

// Inheritance is a mechanism in object-oriented programming (OOP) where one class can inherit properties and methods from another class.
// The child class inherits all the properties and methods of the parent class and can also add new properties and methods of its own.
// Inheritance is used to create a hierarchy of classes where a child class is a modified version of the parent class.
// It allows you to reuse code and avoid code duplication.
//الوراثة معناها إن كلاس جديد يقدر ياخد (يرث) خواص ودوال من كلاس قديم و يقدر كمان يعدل او يضيف صفات جديدة مميزة له ويوفر عليك تكرار الكود.

class Animal {
  name;
  color;

  walk() {
    console.log(`${this.name} is walking on 2 or 4 legs`);
  }
}

class Dog extends Animal {
  kidsFriendly;
  walk() {
    console.log(`${this.name} is walking on 4 legs`);
  }
}

class Lion extends Animal {
  kidsFriendly;
  walk() {
    console.log(`${this.name} is walking on 4 legs`);
  }
}

let dog = new Dog();
dog.name = "Bella";
dog.color = "white";
dog.kidsFriendly = true;

let lion = new Lion();
lion.name = "Simba";
lion.color = "yellow";
lion.kidsFriendly = false;

console.log(dog);
console.log(lion);


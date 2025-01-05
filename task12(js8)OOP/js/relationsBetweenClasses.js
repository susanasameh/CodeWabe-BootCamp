//Relationships Between Classes
// Discuss Association, Aggregation, and Composition.
// Provide examples of each using Js

//. العلاقات بين الكلاسات (Classes Relationships)
/*ليه بنتكلم عن علاقات الكلاسات؟
لما بتبني تطبيق كبير، لازم الكلاسات (الأكواد) تقدر تتواصل مع بعضها وتشتغل مع بعض. في كذا نوع من العلاقات بين الكلاسات:

1. Association (ارتباط):
object use object ===========> using it in one action
علاقة بسيطة بين كلاس وكلاس تاني، وكل واحد فيهم ممكن يعيش لوحده.
مثال: طالب وكورس (طالب ممكن يدخل أكتر من كورس، والكورس يضم أكتر من طالب).
*/

class Student {
  name;

  enrollCourse(course) {
    console.log(this.name, "is enrolled in", course.courseTitle);
  }
}

class Course {
  courseTitle;
  constructor(title) {
    this.courseTitle = title;
  }
}

let student1 = new Student();
student1.name = "John";

let course = new Course();
course.courseTitle = "JavaScript";

let course2 = new Course();
course2.courseTitle = "HTML";

student1.enrollCourse(course);
student1.enrollCourse(course2);

/*2. Aggregation (تجميع):
علاقة "كل وجزء"، بس الأجزاء تقدر تعيش لوحدها لو "الكل" اتلغى.
مثال: مكتبة وكتب (لو المكتبة اتقفلت، الكتب تفضل موجودة).
*/

class Library {
  name;
  address;
  books = [];

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    let index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }
}

class Book {
  title;
  author;
}

let library = new Library();
library.name = "My Library";
library.address = "123 Main St";

let book1 = new Book();
book1.title = "js book";
book1.author = "js developer";

let book2 = new Book();
book2.title = "html book";
book2.author = "html developer";

let book3 = new Book();
book3.title = "css book";
book3.author = "css developer";

let book4 = new Book();
book4.title = "python book";
book4.author = "python developer";

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log(library);

library.removeBook(book4);

console.log(library);

/*3. Composition (تركيب):
علاقة "كل وجزء"، بس الأجزاء تموت مع الكل لو الكل اتلغى.
مثال: بيت وغرف (لو البيت وقع، الغرف هتختفي).
*/

class House {
  owner;
  address;
  rooms = [];

  noOfRooms() {
    return this.rooms.length;
  }

  addRoom(room) {
    this.rooms.push(room);
  }
}

//another way to add rooms
class Home {
  owner;
  address;
  rooms;
  constructor(rooms) {
    this.rooms = [
      new Room("bathroom", "10m2"),
      new Room("bedroom", "20m2"),
      new Room("kitchen", "15m2"),
    ];
  }
}

class Room {
  type;
  size;

  constructor(type, size) {
    this.type = type;
    this.size = size;
  }
}

let house = new House();
house.owner = "Ahmed";
house.address = "Cairo";

let room1 = new Room();
room1.type = "bedroom";
room1.size = "20m2";

let room2 = new Room();
room2.type = "bathroom";
room2.size = "10m2";

let room3 = new Room();
room3.type = "kitchen";
room3.size = "15m2";

house.addRoom(room1);
house.addRoom(room2);
house.addRoom(room3);

console.log(house);

let home = new Home();
home.owner = "Maged";
home.address = "Alex";
console.log(home);

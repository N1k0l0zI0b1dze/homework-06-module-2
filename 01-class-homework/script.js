//1 Create a base class Person
// Properties: name, age
// Method: introduce() → returns "Hi, my name is X and I am Y years old."

class Person {
  name = null;
  age = null;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce = () => {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

//2 Create a class Student that extends Person
// Extra properties: grade, subjects (array of strings)
// Method: study(subject) → adds a subject into subjects if not already included
// Method: getInfo() → "Student: Name, Grade: X, Subjects: ..."

class Student extends Person {
  grade = null;
  subjects = [];

  constructor(name, age, grade, subjects) {
    super(name, age);
    this.grade = grade;
    this.subjects = subjects;
  }

  addSubject = (subject) => {
    if (this.subjects.includes(subject)) {
      return `Subject ${subject} already included.`;
    } else {
      this.subjects.push(subject);
      return `Subject added! ${this.subjects}`;
    }
  };

  getInfo = () => {
    return `Student: ${this.name}, Grade: ${this.grade}, subjects: ${this.subjects}`;
  };
}

const person1 = new Student("Nikoloz", 21, 2, ["JS", "React", "HTML"]);

console.log(person1.introduce());
console.log(person1.getInfo());
console.log(person1.addSubject("CSS"));


// 3 Create a class Teacher that extends Person
// Extra properties: subject, salary
// Method: teach() → "Mr/Ms. X is teaching Y"
// Method: getInfo() → "Teacher: Name, Subject: X, Salary: Y"


class Teacher extends Person {
  subject = null;
  salary = null;

  constructor(name, age, subject, salary){
    super(name, age);
    this.subject = subject;
    this.salary = salary;
  }

  teach = () => {
    return `Mr/Ms. ${this.name} is teaching ${this.subject}`;
  };
  
  getTeacherInfo = () => {
    return `Teacher: ${this.name}, Subject: ${this.subject}, Salary: ${this.salary}`;
  };
}

const teacher = new Teacher("Nikoloz", 30, "JS", 30000);

console.log(teacher.teach());
console.log(teacher.getTeacherInfo());


// 4 Create a class Classroom
// Properties: teacher (one), students (array)
// Method: addStudent(student) → adds a student
// Method: listMembers() → logs teacher and all students with their info
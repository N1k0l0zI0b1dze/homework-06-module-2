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
    return `Student: ${this.name}, age: ${this.age} Grade: ${this.grade}, subjects: ${this.subjects}`;
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

  constructor(name, age, subject, salary) {
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

// 4 Create a class Classroom
// Properties: teacher (one), students (array)
// Method: addStudent(student) → adds a student
// Method: listMembers() → logs teacher and all students with their info

const person2 = new Student("Nika", 23, 5, ["JS", "React", "HTML"]);

const teacher = new Teacher("Nikoloz", 30, "JS", 30000);

console.log(teacher.teach());
console.log(teacher.getTeacherInfo());

const studentsArr = [person1, person2];

console.log(studentsArr);

class Classroom {
  teacher = null;
  students = [];

  constructor(teacher, students = []) {
    this.teacher = teacher;
    this.students = students;
  }

  addStudent(student) {
    this.students.push(student);
  }

  listMembers() {
    console.log("Teacher:");
    console.log(this.teacher.getTeacherInfo());
    console.log("Students:");
    this.students.forEach((student) => {
      console.log(student.getInfo());
    });
  }

  findStudent = (name) => {
    const found = this.students.find((student) => student.name == name);

    if (found) {
      console.log(found.getInfo());
    } else {
      console.log(`Student with name ${name} not found.`);
    }
  };

  avarageAge() {
    if (this.students.length === 0) {
      return "No students";
    }

    const totalAge = this.students.reduce(
      (sum, student) => sum + student.age,
      0
    );
    const avg = totalAge / this.students.length;

    return avg;
  }
}

const classroom = new Classroom(teacher, [person1]);
classroom.addStudent(person2);
classroom.listMembers();
console.log(classroom.avarageAge());

// 5 Bonus tasks

// Add a method findStudent(name) that searches a student by name
// Add a method averageAge() that calculates the average age of students

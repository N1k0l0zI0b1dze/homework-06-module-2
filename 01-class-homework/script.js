


//1 Create a base class Person
// Properties: name, age
// Method: introduce() → returns "Hi, my name is X and I am Y years old."

class Person {
    name = null;
    age = null;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    introduce = () => {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    };

}


const person1 = new Person("Nikoloz", 21);


console.log(person1.introduce());



//2 Create a class Student that extends Person
// Extra properties: grade, subjects (array of strings)
// Method: study(subject) → adds a subject into subjects if not already included
// Method: getInfo() → "Student: Name, Grade: X, Subjects: ..." 


console.log("HEllO");

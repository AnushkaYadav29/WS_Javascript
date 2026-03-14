
//Creating an object
const student={
    name : "Anushka",
    age : 23,
    grade : "A"
};
console.log(student)

//Adding a new Property

student.subject="Math"
console.log(student.subject)

//Updating the property

student.grade="B"
console.log(student.grade)

//Delete the property

delete student.age;
console.log(student)
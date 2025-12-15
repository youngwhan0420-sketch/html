class Student {
    name;
    age;

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// 객체 생성
const student1 = new Student("김영환", 29);
console.log(student1);
console.log(student1.name);

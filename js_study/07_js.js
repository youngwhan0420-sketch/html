// 비구조할당(구조분해)
// 배열이나 객체의 속성을 해체하여 개별 변수에 할당하는 문법

const student = {
    name: "김영환",
    age: 29,
    address: "울산",
};

// const studentName = student.name;
// const studentAge = student.age;
// 비구조 할당을 사용
// const { name: studentName, age: studentAge, address: studentAddress } = student;
// console.log(studentName);
// console.log(studentAge);
// console.log(studentAddress);
const { name, age, address } = student;
console.log(name, age, address);

// function printInfo(studentObj) {
//     console.log(studentObj.name);
//     console.log(studentObj.age);
//     console.log(studentObj.address);
// }
// printInfo(student);
// 비구조 할당으로

function printInfo({ name: studentName, age, address }) {
    console.log(studentName);
    console.log(age);
    console.log(address);
}
printInfo(student);

const s1 = {
    name: "김영환",
    age: 29,
};
const s2 = {
    name: "박윤호",
    age: 25,
};

// 안에있는 속성명이 같으면 각각 다른 변수를 할당해주는게 좋다.
// const { name, age } = s1;
// const { name, age } = s2;

// 서로 다른 객체지만 속성명이 같아서 충돌이 일어날 수 있다.
const { name: n1, age: a1 } = s1;
const { name: n2, age: a2 } = s2;

// 배열에서의 비구조 할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

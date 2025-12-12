//객체
const student = {
    name: "김영환",
    age: 29,
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student["age"]);

// 이름을 바꾸겠다.
student["name"] = "김일환";
student["age"] = 21;

console.log(student);

student.name = "유노윤호";
student.age = 7;
student.address = "화성";
console.log(student);

// 객체에 함수를 넣고 싶을 경우
student.printName = () => console.log("이름 :", student.name);
student.printName();

const loginButton = {
    text: "로그인",
    value: "로그인 되었습니다.",
    onClick: () => {
        console.log(loginButton.value);
    },
};
loginButton.onClick();

const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys);

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);

// 엔트리스를 반복 돌릴껀데 향상된 for문 으로 돌린다.
for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

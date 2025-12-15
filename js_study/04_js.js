// 배열
const arr1 = []; // 비어있는 배열
const arr2 = new Array(); // 빈 배열

// 요소 추가 push
// 배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 == arr2);

// 자바스크립트의 객체를 문자열로 변환
const json1 = JSON.stringify(arr1);
console.log(json1);

const json2 = JSON.stringify(arr2);
console.log(json1 === json2);

const arr3 = JSON.parse(json1);
console.log(arr3);

// 배열에 재할당x 요소추가는 o 그래서 상수도 가능

const names = ["배찬익", "유노윤호", "김영환"];
names.push("심재원");

// 요소 제거(pop) , 배열의 요소중에 마지막 요소를 제거한다.
// 제거하고 나서 제거된 요소를 반환해준다.
// 즉, 마지막 요소가 제거되고 그 해당 요소를 출력해준다.
console.log(names.pop());

// 요소 수정/삽입/제거 => splice(삽입될 인덱스, 제거할 갯수, 추가할 요소...)
names.splice(1, 0, "김영환");
console.log(names);

names[0] = "빠니찬익";
console.log(names);

// 요소찾기
// 주어진 조건 함수를 만족하는 배열의 첫번째 요소를 반환한다.
const findFx = (str) => str === "유노윤호";
const foundName = names.find(findFx);
console.log(foundName);

console.log(names.find((name) => name === "유노윤호"));

const students = [
    { name: "배찬익", age: 23 },
    { name: "  박윤호", age: 6 },
    { name: "정희원", age: 14 },
    { name: "심재원", age: 17 },
];

console.log(students.find((student) => student.name === "박윤호" && student.age === 6));

// 중간에 빠니찬익으로 바꿨기 때문에 false가 뜬다.
console.log(names.includes("배찬익"));

const numbers = [1, 2, 3, 4, 5];
// 짝수만 가져와라
console.log(numbers.filter((n) => n % 2 === 0));

console.log(students.filter((student) => student.age === 6));

console.log(numbers.map((n) => n * 10));

// age가 17인 사람의 name만 반환하고 싶을 경우
console.log(
    students.map((student) => {
        if (student.age === 18) {
            return {
                name: student.name,
            };
        }
        return student;
    })
);

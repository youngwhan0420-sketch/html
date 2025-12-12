//자바 스크립트는 타입 명시 x
// 변수 선언 => let, const
let name = "김영환";
// 출력
console.log(name);
console.log("hello world!");

name = "김일환";
console.log(name);

const age = 27;
console.log(age);

// age = 18;
// const는 상수기 때문에 에러뜬다.
// console.log(age);

// 연산자
let data1 = 10;
let data2 = "10";
// ==는 주소비교가 아니라 값만 비교한다.
// === 이 주소비교
//동등 연산자
let result = data1 === data2;
//일치 연산자
let result2 = data1 == data2;
console.log(result);
console.log(result2);
//타입을 확인하고 싶을 경우
console.log(typeof data1, typeof data2);

console.log("1" + "2");
console.log(1, 2);

// not 연산자
// 1이 true인데 !로 반대기 때문에 false가 나온다.
console.log(!1);
console.log(!0);

// 문자열안에 한 글자라도 들어있으면 true이다.
console.log(!"a");
console.log(!"");
console.log(!null); // true
// !! 두개는 명시적으로 boolean으로 바꾼것
console.log(!!null); // false
// 용도가 값을 명시적으로 boolean타입으로 변환하는 일반적인 방법이다.

// 문자열의 길이를 알고싶다.
console.log("abc".length > 0);
// 비교가 들어가면 boolean타입으로 반환
console.log(!!"" === false);

// 객체
let data = {
    name: "김영환",
    age: 29,
};

if (!data) {
    console.log("사용자 정보가 없습니다.");
} else if (data.name === "김삼환" && data.age === 27) {
    console.log("사용자 이름과 나이가 모두 일치합니다.");
} else if (data.name === "김삼환") {
    console.log("사용자 이름이 일치합니다.");
} else if (data.age === 27) {
    console.log("사용자의 이름은 일치하지 않지만 나이는 일치합니다.");
} else {
    console.log("사용자가 일치하지 않습니다.");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

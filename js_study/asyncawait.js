// async는 비동기 함수 정의 키워드이고
// await는 비동기 함수 동기 호출 키워드이다.
// 이때 await는 async함수 내부에서만 사용 가능하다.

// 예제1.
const promise = new Promise((resolve) => resolve("박윤호"));

// function getData() {
//     return promise;
// }
// 함수 자체를 비동기로 만드는법 앞에 async를 붙인다.
//  async function getData() {
//      // 이제 getData는 비동기 함수다.
//      return "박윤호";
// }
// // 함수정의 앞에 async가 붙으면 해당 function은 promise를 반환하고 리턴값이 promise에 들어간다.

//  const user = getData()
//  user.then((name) => console.log(name))

function getUserReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("사용자 데이터 받아옴");
            resolve({ name: "김영환", age: 29 });
        }, 2000);
    });
}
function getTodoReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("투두 데이터 받아옴");
            resolve({ todoId: 1, title: "잠자기" });
        }, 3000);
    });
}
// async function getData() {
//     await getUserReq(); // 얘를 끝내고 넘어가게하기 위해 await를 붙여준다. 끝내고 넘어가게 함
//     await getUserReq(); // await가 없으면 서버2출력후 실행한다.
//     await getUserReq();
//     return "서버2";
// }

// const data = getData();
// data.then((data) => {         
//     console.log(data);
// });

// async function getUser() {
//     const response = await getUserReq();
//     return response;
// }
// async function getTodo() {
//     const response = await getTodoReq();
//     await response;
// }
async function getData() {
    const user = await getUserReq();
    const todo = await getTodoReq();
    console.log(`${user.name}의 할 일 ${todo.title}입니다.`);
}
getData();

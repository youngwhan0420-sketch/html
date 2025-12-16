//콜백지옥을 해결하기 위함
// promise는 기본적으로 자바스크립트의 비동기처리에 사용되는 객체이다.

// promise객체는 속성으로 state(상태) result(결과값)를 가진다.
// state에는 3가지가 있다.
// 1. 대기(pending): 초기상태, 비동기 작업이 아직 완료되지 않은 상태
// 이때 result는 : undefined를 가지고 있다.

// 2. 이행(fulfilled): 비동기 작업이 성공적으로 완료된 상태
// result: 성공적으로 완료된 결과 값

// 3. 거부(rejected): 비동기 작업이 실패한 상태
// result:실패한 이유 (에러 객체)

// promise의 인자로 함수를 전달 하는데 이걸 excutor를 전달
// 객체 생성과 동시에 즉시 실행
// resolve는 비동기 작업이 성공했을 때 호출하는 함수
// reject는 비동기 작업이 실패했을 때 호출하는 함수
function getData() {
    const promise = new Promise((resolve, reject) => {
        // promise는 객체 생성되면 바로 실행한다.
        // 비동기 작업을 넣어야하니
        setTimeout(() => {
            const data = { name: "김영환" };
            // const data = null; 데이터가 없을 경우
            if (data) {
                console.log("비동기 작업 성공");
                resolve(data);
            } else {
                reject(new Error("네트워크 문제가 발생함"));
            }
        }, 2000);
    });
    return promise;
}
const promise = getData();

promise
    .then((data) => {
        // then은 promise가 fullfiled상태일 때 호출된다.
        console.log("작업 성공 후 이행 상태", data);
    }) // reject가 떴을경우
    .catch((error) => {
        console.log(error);
        //console.log("멋드러지게 에러 처리") 꼭error객체 사용하지 않아도 된다.
        
    }) // fullfilled이든 reject상태이든 무조건 실행 
    .finally(() => {
        console.log("마무리 작업")
    })



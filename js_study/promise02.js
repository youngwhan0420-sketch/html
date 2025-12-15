// promise chaining
function getData(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "김영환" };

            if (num !== 1) {
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
//1.
// promise
//     .then((data) => {
//         console.log("첫 번째 비동기 완료", data);
//         return getData();
//     })
//     .then((data) => {
//         console.log("두번 째 비동기 완료", data);
//     });

//2.
promise
    .then(() => getData(2))
    .then(() => getData(2))
    .then(() => getData(1))
    .then((data) => console.log(data));
    .catch((error) => console.log(error.message));

//3.
// promise
//     .then((data) => {
//         console.log(data);
//         return "hello";
//         // 값을 리턴가면 promise의 resolve에 해당 값이 전달됨
//     })
//     .then((data) => {
//         console.log(data);
//     });

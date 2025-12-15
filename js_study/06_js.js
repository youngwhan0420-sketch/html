// 단축 평가 논리 연산
//  && ||

const name = "김영환";
console.log(!!name && !!"김영환");

// &&
// 앞의 값이 true일때 뒤에 값을 리턴한다. false이면 false리턴
console.log(false && 10);
console.log(true && !!"");
console.log(true && true);
console.log(false && false);

const data = [1, 2, 3];
console.log(data.length != 0 && "데이터 출력");

// ||
// 앞의 값이 false일때 뒤의 "값"을 리턴하고, true일때 true
console.log(true || 10);

// ??
// 앞의 값이 null 또는 undefined가 아니면 앞의 값, 그 외에는 뒤의 값을 return
console.log(null ?? 100)
console.log(undefined ?? 100)
console.log(20 ?? 100)
console.log(0 ?? 100)
console.log("" ?? 100)
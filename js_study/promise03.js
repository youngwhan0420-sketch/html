// 쇼핑몰 promise적용하기

// 실패시 사용자 이름없음 에러객체 전달
function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username) {
                console.log("작업 성공");
                resolve(username);
            } else {
                reject(new Error("사용자 이름 없음"));
            }
        }, 1000);
    });
}

//실패시 상품 없음 레어객체 전달
function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product) {
                console.log("상품 에러 없음");
                resolve(product);
            } else {
                reject(new Error("상품 없음"));
            }
        }, 1000);
    });
}

//실패시 카드번호 또는 제품없음 에러객체 전달
function checkout(cardNumber, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cardNumber && product) {
                console.log("결제 완료");
                resolve({ caedNumber, product });
            } else {
                reject(new Error("카드 번호 또는 제품 없음"));
            }
        }, 1000);
    });
}

login("김영환")
    .then((username) => {
        console.log(`${username}님이 로그인하셨습니다.`);
        return addToCart("닌텐도 스위치");
    })
    .then((product) => {
        console.log(`${product}를 장바구니에 추가했습니다.`);
        return checkout("010-6474-4633", product);
    })
    .then(({ cardNumber, product }) => {
        console.log(`${product}에 대한 결제가 완료되었습니다. 카드번도 ${cardNumber}`);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("쇼핑몰 로그아웃");
    });

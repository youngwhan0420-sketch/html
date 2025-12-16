let studentInputValue = {
    id: 0,
    name: "",
    age: "",
    address: "",
};
function handleRegisterOnkeyup(e) {
    // e는 event의 e
    // console.log(e.target.value) // e에 뭐가있는지 출력해보기
    // RegisterInput의 onkeyup의 이벤트인데 여기엔
    // onkeyup이라는 함수는 키보드를 눌렀다가 때는 순간 이벤트가 발생한다.

    // 몇번째 input에서 입력됐는지 알기
    // console.log("name:", e.target.name);
    // console.log("value", e.target.value);

    studentInputValue = {
        ...studentInputValue,
        [e.target.name]: e.target.value,
    };
    console.log(studentInputValue);
}

const handleRegisterOnclick = () => {
    const newStudent = {
        ...studentInputValue,
        id: studentList.length + 1,
    };
    //stduentList에 추가
    studentList = [...studentList, newStudent];
    loadStudentList();

    console.log(studentList);
};
function studentRegister() {
    return `
    <div>
    ${studentRegisterInput({
        type: "text",
        name: "name",
        onkeyup: "handleRegisterOnkeyup",
    })}
    ${studentRegisterInput({
        type: "text",
        name: "age",
        onkeyup: "handleRegisterOnkeyup",
    })}
    ${studentRegisterInput({
        type: "text",
        name: "address",
        onkeyup: "handleRegisterOnkeyup",
    })}
    <div>
    <button onclick=handleRegisterOnclick()>등록</button>
    </div>

    </div>
    `;
}

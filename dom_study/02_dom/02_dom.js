// 버튼 클릭했을 때 동작 감지
const inputButton = document.querySelector(".input_button");
inputButton.onclick = () => {
    const input = document.querySelector(".inputs");
    const ul = document.querySelector(".data_list");
    //추가하기
    // 빈칸일때 입력버튼을 막고 싶을 경우
    if (input.value == "") {
        alert("빈칸이야");
        return; //빈칸을 막아야하니 return
    }
    // ul.innerHTML = `<li>${input.value}</li>`; // 새로 갈아끼우는 상태에서 기록 남기게할려면 +=
     ul.innerHTML += `<li>${input.value}</li>`;
    input.value = "" // 입력하고 input쪽은 비워두기 
};

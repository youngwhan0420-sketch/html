// 전역으로 사용되는 상태역할
let studentList = []

function app() {
    const appInfo = {
        title: "React Component Study",
        date: new Date().toLocaleDateString(),
        author: "김영환",
    };
    console.log("app함수 호출");
    return `
    <div>
        <h1>제목: ${appInfo.title}</h1>
        <h2>작성일: ${appInfo.date}</h2>
        <h3>작성자: ${appInfo.author}</h3>
        ${studentRegister()}
        <ul class="student_list></ul>
    </div>`;
    // 얘를 넣어주는 애를 index.js에 넣어준다.
}

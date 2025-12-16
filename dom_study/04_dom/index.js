// 

window.onload = () => {
    // onload 웹페이지에 대한 리소스들이 모두 로드되는 시점 (웹페이지 켜질때)
    console.log("리소스 온로드 됨");
    const root = document.querySelector("#root");

    render(root);
    console.log("렌더링 완료"); 
};
function render(targerElement) {
    targerElement.innerHTML = app();
    // app.js에 있는 app()호출 결과를 targetElement에 innerHTML한다.
    
}

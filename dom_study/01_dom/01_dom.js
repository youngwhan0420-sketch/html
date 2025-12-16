// const title1 = document.getElementById("title"); // 아이디라 #이 붙어있다.
// //  이러면 title1에는 h1태그 객체가 들어간다.
// console.log(title1);
// console.log({ title1 });

// // 클래스네임으로 가져온다.
// const titles = document.getElementsByClassName("title");
// console.log(titles);

// // 태그네임
// const h3 = document.getElementsByTagName("h3");
// console.log(h3);

// const d1 = document.getElementById("d1");
// const d2 = document.getElementById("d2");
// console.log({ d1 });

// const title2 = document.querySelector(".title"); // 클래스의 title을 찾고싶으면 .title, id는 #title넣어준다.
// const titles2 = document.querySelectorAll(".title");

// queryselector의 장점: 자식 선택이 가능하다.
// const div2 = document.querySelector("#d1 > #d2");
// console.log(div2);

// const div1 = document.querySelector("#d1 > #d2");
// const div2 = div1.querySelector("#d2");

// div2.innerHTML = "<p>innerHTML입니다</p>";
// div2.innertext = "<p>innerHTML입니다</p>";

const students = [
    { name: "박윤호", age: 25, address: "김해" },
    { name: "배찬익", age: 23, address: "대연동" },
    { name: "정희원", age: 31, address: "사직동" },
];
const tbody = document.querySelector(".student_table > tbody");
const trs = students.map((student, index) => {
    return `
    <tr>
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.address}</td>
    </tr>`;
});

console.log(trs);

tbody.innerHTML = trs.join("");

const tdList = document.querySelectorAll("td");
tdList.forEach((td) => (td.style = "border:1px solid black"));

const studentTable = document.querySelector(".student_table");
// 테이블 클래스에 테이블에 아이디 속성 부여
studentTable.id = "table_id";
// student클래스 없애기
studentTable.classList.remove("student");
studentTable.classList.add("student_class")

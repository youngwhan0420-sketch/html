const inputButton = document.querySelector(".input_button");
addButton.onclick = () => {
    const nameInput = document.querySelector("#input_name");
    const ageInput = document.querySelector("#input_age");
    const addressInput = document.querySelector("#input_address");

    const nameValue = nameInput.value;
    const ageValue = ageInput.value;
    const addressValue = addressInput.value;

    let count = 1;
    if (nameValue === "" || ageValue === "" || addresssValue === "") {
        alert("빈칸을 채워주세요 ");
        return;
    }

    const tbody = document.querySelector("#t_tbody");

    tbody.innerHTML += `
    <tr>
        <td>${count++}</td>
        <td>${nameValue}</td>
        <td>${ageValue}</td>
        <td>${addressValue}</td>
    </tr>`;
    nameInput.value = "";
    ageInput.value = "";
    addressInput.value = "";
};

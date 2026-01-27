console.log(document);

const title = document.getElementById("title");
const text = document.querySelector(".text");

console.log(title);
console.log(text);

title.textContent = "DOM изменён через JS!"

title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Кнопка нажата!");
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "white";
})

const input = document.getElementById("nameInput");
const button = document.getElementById("showName");
const output = document.getElementById("output");
const clearButton = document.getElementById("clearButton");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        output.textContent = `Hello, ${input.value}!`;
        output.style.color = "green";
    } else {
        output.textContent = "Пожалуйста, введите имя!";
        output.style.color = "red";
    }
});
clearButton.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
    output.style.color = "";
    input.focus();
})


const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const result = document.getElementById("formResult");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = usernameInput.value.trim();
    const age = Number(ageInput.value);

    if (name === "") {
        result.textContent = "Имя не может быть пустым!";
        result.style.color = "red";
        usernameInput.focus();
        return;
    }
    if (isNaN(age) || age <= 0 || age > 120) {
        result.textContent = "Ошибка: Введите корректный возраст (от 1 до 120)!";
        result.style.color = "red";
        ageInput.focus();
        ageInput.value = "";
        return;
    }
    result.textContent = `Данные сохранены: Name: ${name}, Age: ${age}`;
    result.style.color = "green";
    form.reset();
});

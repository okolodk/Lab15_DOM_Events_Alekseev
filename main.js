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
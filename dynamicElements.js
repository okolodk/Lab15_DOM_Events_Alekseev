const addUserBtn = document.getElementById("addUserBtn");
const usersList = document.getElementById("usersList");

let userCounter = 1;

addUserBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    const userText = document.createTextNode(`Пользователь #${userCounter}`);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete_btn";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.fontSize = "12px";

    listItem.appendChild(userText);
    listItem.appendChild(deleteBtn);
    listItem.id = `user_${userCounter}`;
    usersList.appendChild(listItem);
    userCounter++;
    updateUserStats();
});
usersList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete_btn")) {
        const listItem = event.target.parentElement;
        listItem.remove();
        updateUserStats();
    }
});

function updateUserStats() {
    const userCount = usersList.children.length;
    const statsElement = 
        document.querySelector(".user_stats") || createStatsElement();
    statsElement.textContent = `Всего пользователей: ${userCount}`;

}
function createStatsElement() {
    const stats = document.createElement("div");
    stats.className = "user_stats";
    stats.style.marginTop = "10px";
    stats.style.fontWeight = "bold";
    stats.style.color = "#333";
    usersList.parentElement.appendChild(stats);
}
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const taskCompleted = document.getElementById("taskCompleted");
const clearAll = document.querySelector(".clear_all")
let filter = "all";
function filterTasks() {
    const tasks = document.querySelectorAll(".task_item");

    tasks.forEach(task => {
        const isCompleted = task.classList.contains("completed");

        if (filter === "all") {
            task.style.display = "flex";
        } else if (filter === "active" && !isCompleted) {
            task.style.display = "flex";
        } else if (filter === "completed" && isCompleted) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    })
}
document.querySelectorAll(".filter_btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".filter_btn").forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        filter = button.getAttribute("data-filter");
        filterTasks();
    });
});
function updateCounter() {
    const totalTasks = document.querySelectorAll(".task_item").length;
    const completedTask = document.querySelectorAll(".completed").length;
    taskCounter.textContent = `Всего задач: ${totalTasks} |`;
    taskCompleted.textContent = `Выполнено: ${completedTask} |`;
}
function createTaskItem(text) {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const buttonsDiv = document.createElement("div");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    taskItem.className = "task_item";
    taskText.className = "task_text";
    buttonsDiv.className = "task_buttons";
    completeBtn.className = "complete_btn";
    deleteBtn.className = "delete_btn";

    taskText.textContent = text;
    completeBtn.textContent = "Выполнено";
    deleteBtn.textContent = "Удалить";

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    taskItem.appendChild(taskText);
    taskItem.appendChild(buttonsDiv);

    completeBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
         completeBtn.textContent = taskItem.classList.contains("completed")
            ? "Возобновить" : "Выполнено";
            updateCounter();
    });
    deleteBtn.addEventListener("click", function () {
        taskItem.remove();
        
        updateCounter();
    })
    return taskItem;
}

function addNewTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Пожалуйста, введите текст задачи.");
        return;
    }
    const newTask = createTaskItem(text);
    taskList.appendChild(newTask);
    
    updateCounter();

    taskInput.value = "";
    taskInput.focus();
}
addBtn.addEventListener("click", addNewTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});
clearAll.addEventListener("click", () => {
    const completedTasks = document.querySelectorAll(".task_item.completed");
    completedTasks.forEach(task => {
        task.remove();
    });
    updateCounter();
})
document.addEventListener("DOMContentLoaded", function () {
    const sampleTasks = [
        "Изучить JS",
        "Создать TODO-list",
        "Поработать над проектом",
    ];
    sampleTasks.forEach(function (task) {
        const newTask = createTaskItem(task);
        taskList.appendChild(newTask);
    });
    updateCounter();
})


alert("halo tugas praktek")
document.addEventListener("DOMContentLoaded" , function () {
    const tasklist = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click" , function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            newTaskInput.value = "";
        }
    });

    newTaskInput.addEventListener("keyup" , function(event) {
        if (event.key === "enter") {
            addTaskButton.click();
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("Buttton");
        deleteButton.textContent = "delete";
        deleteButton.classList.add("delete-Button");

        deleteButton.addEventListener("click" , function() {
            tasklist.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);

        taskItem.addEventListener("click" , function() {
            taskItem.classList.toggle("completed");
        });

        tasklist.appendChild(taskItem);
    }
});
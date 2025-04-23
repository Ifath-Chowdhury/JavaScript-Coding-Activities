// Empty array to hold tasks
let tasks = [];

// Function to add tasks
function AddTask(){
    // Get value from input field
    const input = document.getElementById("input").value;

    // Add task to tasks
    if (input) {
        tasks.push(input);
    } else {
        alert("Enter a valid task");
    }

    // Call display task function
    DisplayTasks();
}

// Function to display tasks
function DisplayTasks(){
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    // Loop through tasks array and display each task as an li element
    for(let i = 0; i < tasks.length; i++){
        let newTask = document.createElement("li");
        newTask.innerHTML = tasks[i];

        // Add remove button to the task
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove task";
        removeButton.onclick = () => {
            // Remove task from array then call display task function
            tasks.splice(i, 1);
            DisplayTasks();
        }

        // Append button to task, then append task to task list
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
    }
}
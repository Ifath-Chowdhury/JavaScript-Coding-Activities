let taskList = [];

// Function to add tasks
function AddTask(){
    const input = document.getElementById("task-input-field").value;
    // add input into task array, but if input field is empty then return error
    if (input){
        taskList.push(input);
        UpdateTaskList();
    } else {
        console.log("Enter a task in the text box");
    }
}

// Function to update task list
function UpdateTaskList(){
    const list = document.getElementById("task-list");
    list.innerHTML = "";
    // For each element in taskList array, turn it into an li element and add it as a child of the ul element
    taskList.forEach((task, i) => {
        // Make li element and set its text value to task in taskList
        const li = document.createElement("li");
        li.innerHTML = task;

        // Make a button element to remove tasks
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove task";
        removeButton.onclick = function(){
            taskList.splice(task, 1);
            UpdateTaskList();
        }

        // Append the button to the li, and append the li to the ul
        li.appendChild(removeButton);
        list.appendChild(li);
    })
}
// Empty array that will be used throughout this script
let array = [];

// Function to push element onto end of array
function AddElement(){
    const userInput = document.getElementById("elementInput").value;
    if (userInput) {
        array.push(userInput);
    } else {
        console.log("Type something in the input box");
    }
    DisplayArray();
}

// Function to pop last element from array
function Pop(){
    array.pop();
    console.log("Last element has been popped");
    DisplayArray();
}


// Function to pop first element from array
function Shift(){
    array.shift();
    console.log("First element has been popped");
    DisplayArray();
}


// Function to add element to beginning of array
function Unshift(){
    const unshiftElement = document.getElementById("unshiftInput").value;
    if (unshiftElement) {
        array.unshift(unshiftElement);
    } else {
        console.log("Type something in the input box");
    }
    DisplayArray();
}


// Function to remove element from specific point in array
function RemoveElement(){
    let index = 2;
    array.splice(index, 1);
    DisplayArray();
}

// Function to display array
function DisplayArray(){
    const arrayList = document.getElementById("arrayElements");
    arrayList.innerHTML = "";

    array.forEach((element, index) => {
        const li = document.createElement("li");
        li.textContent = "Element" + (index + 1) + ": " + element;
        arrayList.appendChild(li);
    })
}
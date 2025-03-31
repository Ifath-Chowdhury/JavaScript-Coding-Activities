// Function to toggle between dark and light mode class
function LightDarkToggle() {
    // Declare body and main as a variable and use classlist.toggle
    var docBody = document.body;
    var docMain = document.getElementById("main");

    docBody.classList.toggle("dark-mode");
    docMain.classList.toggle("dark-mode");

    // Change text inside button depending on if site is in dark or light mode
    var docButton = document.getElementById("light-dark-toggle");

    if (docBody.classList.contains("dark-mode")) {
        docButton.textContent = "Light Mode";
    } else {
        docButton.textContent = "Dark Mode";
    }
}
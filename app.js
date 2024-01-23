// Function to handle button clicks
function onButtonClick(value) {
    // Get the calculator display element
    var display = document.getElementById("display");

    // Append the clicked button value to the display
    display.value += value;
}

// Function to evaluate and display the result
function calculate() {
    // Get the calculator display element
    var display = document.getElementById("display");

    try {
        // Evaluate the expression in the display
        var result = eval(display.value);
        
        // Display the result
        display.value = result;
    } catch (error) {
        // Handle any errors
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    // Get the calculator display element
    var display = document.getElementById("display");
    
    // Clear the display
    display.value = "";
}

// Function to handle button clicks
function onButtonClick(value) {
    // Get the calculator display element
    var display = document.getElementById("display");

    // Check if the clicked button has the "clear-display" class
    if (value === 'DEL' || value === 'AC') {
        clearDisplay(value);
    } else {
        // Append the clicked button value to the display
        display.value += value;
    }
}

// Function to clear the display
function clearDisplay(action) {
    // Get the calculator display element
    var display = document.getElementById("display");
    
    if (action === 'AC') {
        // Clear the display completely
        display.value = "";
    } else if (action === 'DEL') {
        // Delete the last character from the display
        display.value = display.value.slice(0, -1);
    }
}


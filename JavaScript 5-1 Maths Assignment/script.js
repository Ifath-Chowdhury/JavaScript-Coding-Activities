// Array of 5 decimal numbers
let decimalArray = [1.245, 5.345, 4.545, 8.585, 9.733];

// Function to calculate mean of all numbers in decimalArray
function MeanCalculator(arrayParam){
    // Variable to store sum of values in array
    let arraySum = 0;

    // Iterate through array and add its values to arraySum
    for(let i = 0; i < arrayParam.length; i++){
        arraySum += arrayParam[i];
        console.log(arrayParam[i]);
    }
    console.log(arraySum);

    // Calculate and return mean (arraySum divided by number of values in decimalArray)
    let result = arraySum / arrayParam.length;
    console.log(result);
    return result;
}

// Store result in a variable
let mean = MeanCalculator(decimalArray);

// Round mean to nearest 2 decimal places
let roundedMean = Math.round(mean * 100) / 100;

// Log final answer to console
console.log("The mean of the array is: " + roundedMean);
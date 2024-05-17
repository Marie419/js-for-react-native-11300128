function processArray(numbers) {
  var processedArray = [];
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number % 2 === 0) {
      processedArray.push(number ** 2);
    } else {
      processedArray.push(number * 3);
    }
  }
  return processedArray;
}

const numbers = [31, 14, 11, 23, 20];
var output = processArray(numbers);
console.log(output);

// Task 2
function formatArrayStrings(strings, numbers) {
  const formattedStrings = [];

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i];
    const number = numbers[i];

    if (number % 2 === 0) {
      formattedStrings.push(string.toUpperCase());
    } else {
      formattedStrings.push(string.toLowerCase());
    }
  }

  return formattedStrings;
}

const strings = ["covert", "neji", "kage", "gouls", "juke"];
const num = [31, 14, 11, 23, 20];

const processedNumbers = processArray(num);
const formatted = formatArrayStrings(strings, processedNumbers);
console.log(formatted);

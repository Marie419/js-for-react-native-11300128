function processArray(numbers) {
  var processArray = [];
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number % 2 === 0) {
      processArray.push(number ** 2);
    } else {
      processArray.push(number * 3);
    }
  }
  return processArray;
}
let numbers = [31, 14, 11, 23, 20];
let output = processArray(numbers);
console.log(output);

function processArray(numbers) {
  
  return numbers;
}
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

// Task 3
function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];

  for (let i = 0; i < names.length; i++) {
    userProfiles.push({
      id: i + 1,
      originalName: names[i],
      modifiedName: modifiedNames[i]
    });
  }

  return userProfiles;
}

const strings = ["covert", "neji", "kage", "gouls", "juke"];
const num = [31, 14, 11, 23, 20];

const processedNumbers = processArray(num);
const formatted = formatArrayStrings(strings, processedNumbers);
console.log('Formatted Strings:', formatted);

const userProfiles = createUserProfiles(strings, formatted);
console.log('User Profiles:', userProfiles);

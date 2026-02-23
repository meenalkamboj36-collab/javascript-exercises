// Exercise 1: maxOfTwoNumbers()
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));


// Exercise 2: isAdult()
function isAdult(age) {
  return age >= 18 ? "Adult" : "Minor";
}
console.log("Exercise 2 Result:", isAdult(21));


// Exercise 3: isCharAVowel()
function isCharAVowel(char) {
  return "aeiou".includes(char);
}
console.log("Exercise 3 Result:", isCharAVowel("a"));


// Exercise 4: generateEmail()
function generateEmail(name, domain) {
  return name + "@" + domain;
}
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));


// Exercise 5: greetUser()
function greetUser(name, timeOfDay) {
  return "Good " + timeOfDay + ", " + name + "!";
}
console.log("Exercise 5 Result:", greetUser("Sam", "morning"));


// Exercise 6: maxOfThree()
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));


// Exercise 7: calculateTip()
function calculateTip(billAmount, tipPercentage) {
  return (billAmount * tipPercentage) / 100;
}
console.log("Exercise 7 Result:", calculateTip(50, 20));


// Exercise 8: convertTemperature()
function convertTemperature(temp, scale) {
  if (scale === "C") {
    return (temp * 9/5) + 32;
  } else if (scale === "F") {
    return (temp - 32) * 5/9;
  }
}
console.log("Exercise 8 Result:", convertTemperature(32, "C"));


// Exercise 9: basicCalculator()
function basicCalculator(num1, num2, operation) {
  if (operation === "add") return num1 + num2;
  if (operation === "subtract") return num1 - num2;
  if (operation === "multiply") return num1 * num2;
  if (operation === "divide") return num1 / num2;
}
console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));


// Exercise 10: calculateGrade()
function calculateGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
console.log("Exercise 10 Result:", calculateGrade(85));


// Exercise 11: createUsername()
function createUsername(firstName, lastName) {
  let part1 = firstName.slice(0, 3);
  let part2 = lastName.slice(0, 3);
  let totalLength = firstName.length + lastName.length;
  return part1 + part2 + totalLength;
}
console.log("Exercise 11 Result:", createUsername("Samantha", "Green"));


// Exercise 12: numArgs()
function numArgs() {
  return arguments.length;
}
console.log("Exercise 12 Result:", numArgs(1, 2, 3, 4));
const readline = require("readline");
var assert = require("assert");

const getInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getAngle = (hour, minute) => {
  return 360 - Math.abs(hour * 30 + minute * 0.5 - minute * 6);
};

getInput.question(`Enter the hour  `, (hour) => {
  getInput.question(`Enter the minute  `, (minute) => {
    assert(
      hour <= 12 && minute <= 60,
      "Error!! The hour should be less than 12 and minute should be less than 60"
    );
    console.log(
      `The angle between ${hour} and ${minute} is ${getAngle(hour, minute)}`
    );
    getInput.close();
  });
});

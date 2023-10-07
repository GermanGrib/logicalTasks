module.exports = function toReadable(number) {

  //define an array of strings for each digit 0-9
  const digitStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  //define an array of strings for the tens place (10, 20, 30, ... 90)
  const tensStrings = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  //define an array of strings for the teens (11, 12, 13, ... 19)
  const teensStrings = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  //define a string to hold fhe final result
  let result = '';

  //if the number is 0, return 'zero'
  if (number === 0) {
    return digitStrings[0];
  }

  //Divide the number by 1000 to get the thousands place and add the corresponding string (if applicable)
  let thousands = Math.floor(number / 1000);
  if (thousands > 0) {
    result += digitStrings[thousands] + ' thousand'
  };

  //Mod the number by 1000 to get the reminder, then divide by 100 to get the hundreds place and add the corresponding string (if applicable)
  number = number % 1000;
  let hundreds = Math.floor(number / 100);
  if (hundreds > 0) {
    result += ' ' + digitStrings[hundreds] + ' hundred';
  }

  //Mod the number by 100 to get the remainder, then divide by 10 to get the tens place
  number = number % 100;
  let tens = Math.floor(number / 10);

  //If the tens place is 1, add the corresponding string from the teensStrings array
  if (tens === 1) {
    result += ' ' + teensStrings[number - 10];
    return result.trim();
  }

  //If the tens place is greater than 1, add the corresponding string from the tensString array
  if (tens > 1) {
    result += ' ' + tensStrings[tens];
  }

  // Mod the number by 10 to get the units place and add the corresponding string if applicable;
  let units = number % 10;
  if (units > 0) {
    result += ' ' + digitStrings[units];
  }

  //Return the final result
  return result.trim();
}

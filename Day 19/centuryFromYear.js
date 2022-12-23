const centuryFromYear = (year) => {
  if (year % 100 === 0) {
    return Math.floor(year / 100);
  } else {
    return Math.floor(year / 100) + 1;
  }
};

console.log(centuryFromYear(1905)); // expected 20
console.log(centuryFromYear(1700)); // expected 17

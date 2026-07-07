let romanToInt = function(str) {

  let count = 0

  const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  for (let i = 0; i < str.length; i++) {
    if (values[str[i]] < values[str[i + 1]]) {
      count -= values[str[i]]
    } else {
      count += values[str[i]]
    }
  }
  return count
}

console.log(romanToInt('IVIVIXIXIIILMCDK'))

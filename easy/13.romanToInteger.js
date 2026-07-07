let romanToInt = function(str) {
  let count = 0
  const array = str.split("")

  const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  for (let i = 0; i < array.length; i++) {

    if (array[i] === "I" && array[i + 1] === "V") {
      count += 4
      array.splice(i, 2)
      i--
      continue

    } else if (array[i] === "I" && array[i + 1] === "X") {
      count += 9
      array.splice(i, 2)
      i--
      continue

    } else if (array[i] === "X" && array[i + 1] === "L") {
      count += 40
      array.splice(i, 2)
      i--
      continue

    } else if (array[i] === "X" && array[i + 1] === "C") {
      count += 90
      array.splice(i, 2)
      i--
      continue

    } else if (array[i] === "C" && array[i + 1] === "D") {
      count += 400
      array.splice(i, 2)
      i--
      continue

    } else if (array[i] === "C" && array[i + 1] === "M") {
      count += 900
      array.splice(i, 2)
      i--
      continue
    }
    count += values[array[i]]
  }
  return count
}

console.log(romanToInt("CMCDXCXLLLLIXIV"))

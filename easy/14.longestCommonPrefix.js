const longestCommonPrefix = function(array) {
  if (array.length === 0) {
    return ""
  }

  let result = ""

  for (let i = 0; i < array[0].length; i++) {
    const char = array[0][i]
    // console.log(char)

    for (let j = 1; j < array.length; j++) {
      if (array[j][i] !== char) {
        return result
      }
    }

    result += char
  }

  return result
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))

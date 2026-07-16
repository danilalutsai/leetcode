const longestCommonPrefix = function(array) {
  if (array.length === 0) return ""

  let shortestWord = array.reduce((shortest, word) => {
    if (shortest.length < word.length) {
      return shortest
    } else {
      return word
    }
  })

  for (let i = 1; i < array.length; i++) {
    while (!array[i].startsWith(shortestWord)) {
      shortestWord = shortestWord.slice(0, -1)
    }
  }

  return shortestWord
}

console.log(longestCommonPrefix(['flower', 'flow', 'fle']))

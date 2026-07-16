const longestCommonPrefix = function(array) {
  let prefix = array[0]

  for (let i = 1; i < array.length; i++) {
    while (!array[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
    }
  }
  return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))

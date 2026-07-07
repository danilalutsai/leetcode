var chunk = function(array, size) {
let result = []
  while (array.length > 0) {
    result.push(array.splice(0, size))
  }
  return result
}

console.log(chunk([], 6))

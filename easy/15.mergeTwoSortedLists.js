const mergeTwoLists = function(list1, list2) {
  const result = []
  for (let i = 0; i < list1.length; i++) {
    // result.push(list1[i])
    result.push(list1.splice(i, i + 1))
    i--
  }
  for (let i = 0; i < list2.length; i++) {
    // result.push(list2[i])
    result.push(list2.splice(i, i + 1))
    i--
  }
  return result.join("")
}

console.log(mergeTwoLists([1, 2, 5, 12, 2, 4],[1, 3, 4]))

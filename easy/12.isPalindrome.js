const isPalindrome = function(number) {
  const string = String(number)
  // console.log(string)
  const regular = string.split("")
  // console.log(regular)
  const reverse = string.split("").reverse().join("")
  // console.log(reverse)
  return string === reverse ? true : false
}

console.log(isPalindrome(121))

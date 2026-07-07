var createCounter = function(init) {
  let value = init
  const obj = {
    increment: function() {
      return ++value
    },
    decrement: function() {
      return --value
    },
    reset: function() {
      return value = init
    }
  }
  return obj
}

console.log(createCounter.obj.increment())

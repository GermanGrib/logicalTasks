module.exports = function check(str, bracketsConfig) {
  let stack = []
  let bracketArray = {}

  for (let pair of bracketsConfig) {
    bracketArray[pair[0]] = pair[1]
  }

  for (let lett of str) {
    if ((lett === '|' || lett === '7' || lett === '8') && stack.includes(lett)) {
      if (stack[stack.length - 1] === lett) {
        stack.pop()
      } else {
        return false
      }
    } else if (lett in bracketArray) {
      stack.push(lett)
    } else {
      if (lett === bracketArray[stack[stack.length - 1]]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }

}
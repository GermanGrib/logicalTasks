module.exports = function reverse(n) {
  let stringN = String(n)
  let arrN = stringN.split('')
  if (arrN[0] === '-') {
    arrN.shift()
  }

  arrN.reverse()

  return parseInt(arrN.join(''))
}



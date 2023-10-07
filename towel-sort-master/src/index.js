
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = []

  for (let numIndMatr in matrix) {
    if (numIndMatr % 2 !== 0) {
      result.push(matrix[numIndMatr].sort((a, b) => b - a))
    } else {
      result.push(matrix[numIndMatr])
    }
  }

  return result.flat()
}

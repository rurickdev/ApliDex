
function firstLetterToUpperCase (string = '') {
  const firstLetter = string[0].toUpperCase()
  return `${firstLetter}${string.slice(1)}`
}

function removeHyphens (string = '') {
  return string.split('-').join(' ')
}

function cleanName (string = '') {
  return string.split('-')[0]
}

// ToDo: redo this function using reduce
function listToMatrix (list, elementsPerSubArray) {
  const matrix = []

  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++
      matrix[k] = []
    }
    matrix[k].push(list[i])
  }

  return matrix
}

function getColumnCount (width) {
  if (width <= 768) return 2
  if (width <= 1023) return 3
  if (width <= 1215) return 4
  if (width <= 1407) return 5
  return 6
}

module.exports = {
  firstLetterToUpperCase,
  removeHyphens,
  cleanName,
  listToMatrix,
  getColumnCount
}

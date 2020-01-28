
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

module.exports = {
  firstLetterToUpperCase,
  removeHyphens,
  cleanName
}

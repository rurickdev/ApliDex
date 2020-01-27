
const fetch = require('isomorphic-unfetch')

const { apiEndPoint } = require('../../constants/urls')

async function getInfo () {
  const res = await fetch(apiEndPoint)
  return res.json()
}

module.exports = {
  getInfo
}

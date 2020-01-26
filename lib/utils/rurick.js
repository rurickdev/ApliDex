
const fetch = require('isomorphic-unfetch')

const apiEndPoint = 'https://fvit92grgf.execute-api.us-east-1.amazonaws.com/default/rurickLambda'

async function getInfo () {
  const res = await fetch(apiEndPoint)
  return res.json()
}

module.exports = {
  getInfo
}

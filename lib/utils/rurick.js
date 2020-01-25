
const apiEndPoint = 'https://fvit92grgf.execute-api.us-east-1.amazonaws.com/default/rurickLambda'

async function getInfo () {
  const res = await fetch(apiEndPoint)
  const { body } = await res.json()
  return body
}

module.exports = {
  getInfo
}

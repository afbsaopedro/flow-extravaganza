export default defineEventHandler(async event => {
  const data = fetch('authentication/api/endpoint/here')
  .then(response => response.json())
  .then(data => data)
  return data
})
  
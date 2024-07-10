export default defineEventHandler(async event => {
  const data = fetch('http://169.50.171.107:7050/dummy/debug/users')
  .then(response => response.json())
  .then(data => data)
  return data
})
  
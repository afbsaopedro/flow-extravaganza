export default defineEventHandler(async event => {
    const body = await readBody(event)
    const response = await fetch('http://169.50.171.107:7050/dummy/auth/id', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: body.id
        })
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => createError(error))

    return response
  })
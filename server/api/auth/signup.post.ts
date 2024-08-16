export default defineEventHandler(async event => {
    
    const body = await readBody(event)

    const response = await fetch('authentication/api/endpoint/here', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'token': body.token
        },
        body: JSON.stringify({
            email: body.email
        })
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => createError(error))
    
    return response
  })
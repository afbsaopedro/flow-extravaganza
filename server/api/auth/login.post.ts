export default defineEventHandler(async event => {
    
    const body = await readBody(event)

    const response = await fetch('http://169.50.171.107:7050/dummy/auth/login', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'token': body.token
        },
        body: JSON.stringify({
            password: body.password
        })
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => createError(error))
    
    return response
  })
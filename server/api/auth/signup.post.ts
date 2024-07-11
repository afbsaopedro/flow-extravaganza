export default defineEventHandler(async event => {
    
    const body = await readBody(event)

    const response = await fetch('http://169.50.171.107:7050/dummy/auth/signUp', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'token': body.token
        },
        body: JSON.stringify({
            validator: body.validator
        })
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => createError(error))
    
    console.log(response)

    return response
  })
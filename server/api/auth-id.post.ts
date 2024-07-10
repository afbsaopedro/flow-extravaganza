export default defineEventHandler( async event => {
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
    
    const validateData = await fetch('http://169.50.171.107:7050/dummy/auth/validate', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            token: response.token
        },
        body: JSON.stringify({
            validator: 'validate'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw createError('no work')
        }
        return response.json()
    })
    .then(data => data)
    .catch(error => createError(error))

    console.log(validateData)

    return '/auth' + validateData.redirect
})
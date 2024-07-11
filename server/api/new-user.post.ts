export default defineEventHandler(async event => {
    const incoming = await readBody(event)

    const response = await fetch('http://169.50.171.107:7050/dummy/debug/user', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(incoming)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => createError(error))

    console.log(response)

  })
    
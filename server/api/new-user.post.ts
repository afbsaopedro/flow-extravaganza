export default defineEventHandler(async event => {
    const incoming = await readBody(event)

    const response = await fetch('authentication/api/endpoint/here', {
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
    
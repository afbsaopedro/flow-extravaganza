import { errorMessages } from "vue/compiler-sfc"

export default defineEventHandler(async event => {
    const body = await readBody(event)
    const response = await fetch('http://169.50.171.107:7050/dummy/auth/id', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: body.email
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => createError(error))
})
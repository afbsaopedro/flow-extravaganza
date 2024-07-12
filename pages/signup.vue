<script setup>
let email = ref('')

async function foo() {
    const response = await $fetch('/api/auth/signup', {
        method: 'POST',
        body: {
            email: email.value,
            token: useState('token').value
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(error => createError(error))

    navigateTo('/login')
}
</script>

<template>
    <h1>Sign Up</h1>
    <br>
    <UInput v-model="email" variant="outline" placeholder="mail@service.com" type="email"/>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
</template>
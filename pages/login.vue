<script setup>
let password = ref('')

async function foo() {
    const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: {
            password: password.value,
            token: useState('token').value
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(error => createError(error))

    navigateTo(response.redirect)
}
</script>

<template>
    <h1>Log in</h1>
    <br>
    <UInput v-model="password" variant="outline" placeholder="Password" type="password"/>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
</template>
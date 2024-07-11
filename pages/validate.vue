<script setup>
let validator = ref('')

async function foo() {
    const response = await $fetch('/api/auth/validate', {
        method: 'POST',
        body: {
            validator: validator.value,
            token: useState('token').value
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(error => createError(error))


    const token = useState('token')
    token.value = response.token

    navigateTo(response.redirect)
}
</script>

<template>
    <h1>Validate</h1>
    <br>
    <UInput v-model="validator" variant="outline" placeholder="Validator"></UInput>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
</template>
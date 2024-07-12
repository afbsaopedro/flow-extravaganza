<script setup>
let password = ref('')

async function postPassword() {
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
    <h1 class="text-2xl font-bold mb-6">Log in</h1>
    <UFormGroup label="Password">
        <UInput
            class="caret-red-500"
            padded
            v-model="password"
            variant="outline"
            placeholder="Password"
            color="red"
            size="xl"
            type="password"
            icon="i-heroicons-lock-closed"/>
    </UFormGroup>
    <UButton color="red" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postPassword"></UButton>
</template>
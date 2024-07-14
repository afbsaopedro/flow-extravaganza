<script setup>
let id = ref('')

async function postNewUser(){
    let validator = 'validator' + id.value

    const response = await $fetch('http://localhost:3000/api/new-user', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id.value,
            validator: validator
        })
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => createError(error))

    navigateTo('/foo')
}
</script>

<template>
    <h1 class="text-2xl font-bold mb-6 text-primary">New User</h1>
    <UFormGroup label="New User ID">
        <UInput
            class="caret-primary"
            padded
            v-model="id"
            variant="outline"
            placeholder="Example: 456"
            color="primary"
            size="xl"
            icon="i-heroicons-user-plus"/>
    </UFormGroup>
    <UButton color="primary" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postNewUser"></UButton>
</template>
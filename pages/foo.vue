<script setup lang="ts">
let id = ref('')
let validator = ref('')

let users = await $fetch('http://localhost:3000/api/users')
    .then(response => response)

async function foo() {
    const response = await $fetch('/api/auth-id', {
        method: 'POST',
        body: {
            id: id.value,
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(error => createError(error))

    navigateTo(response.redirect)
}
</script>

<template>
    <h1>Foo</h1>
    <br>
    <UInput v-model="id" variant="outline" placeholder="ID"/>
    <br>
    <UInput v-model="validator" variant="outline" placeholder="Validator"/>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
    <br>
    <br>
    <UTable :rows="users"></UTable>
</template>
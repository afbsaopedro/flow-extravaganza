<script setup>
let id = ref('')

async function foo(){
    let validator = 'validator' + id.value
    alert(id.value + '\n' + validator)

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
}
</script>

<template>
    <h1>New User</h1>
    <br>
    <UInput v-model="id" variant="outline" placeholder="ID"/>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
</template>
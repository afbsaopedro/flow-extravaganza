<script setup lang="ts">
let id = ref('')

async function postID() {
    const response = await $fetch('/api/auth/id', {
        method: 'POST',
        body: {
            id: id.value,
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
    <h1 class="text-2xl font-bold mb-6">Index</h1>
    <UFormGroup label="ID">
        <UInput
            class="caret-red-500"
            padded
            v-model="id"
            variant="outline"
            placeholder="Example: 76"
            color="red"
            size="xl"
            icon="i-heroicons-finger-print"/>
    </UFormGroup>
    <UButton color="red" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postID"></UButton>
</template>
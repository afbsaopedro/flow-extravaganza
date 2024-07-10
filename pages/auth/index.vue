<script setup lang="ts">
let id = ref("firsttimeuser")
let validator = ref('validate')

async function foo() {
    await $fetch('/api/auth-id', {
        method: 'POST',
        body: {
            id: id.value,
            validator: validator.value
        }
    })
    .then(response => {navigateTo(response)})
    .catch(console.log)
}

</script>

<template>
        <UFormGroup label="ID">
        <UInput v-model="id"></UInput>
    </UFormGroup>

    <UFormGroup label="Validator">
        <UInput v-model="validator"></UInput>
    </UFormGroup>

    <UButton @click="foo">Do the thing</UButton>
</template>
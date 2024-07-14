<script setup>
let validator = ref('')

async function postValidator() {
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
    <h1 class="text-2xl font-bold mb-6 text-primary">Validate yourself</h1>
    <UFormGroup label="Validator">
        <UInput
            class="caret-primary"
            padded
            v-model="validator"
            variant="outline"
            placeholder="Example: 3C2cCwqEvU"
            color="primary"
            size="xl"
            icon="i-heroicons-identification"></UInput>
    </UFormGroup>
    <UButton color="primary" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postValidator"></UButton>
</template>
<script setup>
const toast = useToast()
toast.clear()

let validator = ref('')

async function postValidator() {
    const response = await $fetch('/api/auth/validate', {
        method: 'POST',
        body: {
            validator: validator.value,
            token: useState('token').value
        }
    })
    .then(response => {
        if('redirect' in response) {
            toast.add({
                title: 'Good Validator',
                description: 'You will be redirect as soon as possible.',
                icon: 'i-heroicons-check-circle',
                color: "primary",
                timeout: 6000,
            })
            return response
        } else {
            toast.add({
                title: 'Bad Validator',
                description: 'Validator is invalid.\nIf the problem persists, please contact us.',
                icon: 'i-heroicons-x-circle',
                color: "red",
                timeout: 6000,
                actions: [{
                    label: 'Contact',
                    click: () => {
                        navigateTo('/contact')
                    }
                }]
                })
            return response
        }
    })
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
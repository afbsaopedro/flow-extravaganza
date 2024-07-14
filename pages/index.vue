<script setup lang="ts">
const toast = useToast()

let id = ref('')

async function postID() {
    const response = await $fetch('/api/auth/id', {
        method: 'POST',
        body: {
            id: id.value,
        }
    })
    .then(response => {
        if('redirect' in response) {
            toast.add({
                title: 'Valid ID',
                description: 'You will be redirect as soon as possible.',
                icon: 'i-heroicons-check-circle',
                color: "primary",
                timeout: 6000,
            })
            return response
        } else {
            toast.add({
                title: 'Bad ID',
                description: 'ID is invalid.\nIf the problem persists, please contact us.',
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
    <h1 class="text-2xl font-bold mb-6 text-primary">Index</h1>
    <UFormGroup label="ID">
        <UInput
            class="caret-primary"
            padded
            v-model="id"
            variant="outline"
            placeholder="Example: 76"
            color="primary"
            size="xl"
            icon="i-heroicons-finger-print"/>
    </UFormGroup>
    <UButton color="primary" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postID"></UButton>
</template>
<script setup>
const toast = useToast()
toast.clear()

let password = ref('')

async function postPassword() {
    const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: {
            password: password.value,
            token: useState('token').value
        }
    })
    .then(response => {
        if('redirect' in response) {
            toast.add({
                title: 'Valid Password',
                description: 'You will be redirect as soon as possible.',
                icon: 'i-heroicons-check-circle',
                color: "primary",
                timeout: 6000,
            })
            return response
        } else {
            toast.add({
                title: 'Wrong Password',
                description: 'You have entered the wrong password.\nIf you have forgotten your password, please contact us.',
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

    navigateTo(response.redirect)
}
</script>

<template>
    <h1 class="text-2xl font-bold mb-6 text-primary">Log in</h1>
    <UFormGroup label="Password">
        <UInput
            class="caret-primary"
            padded
            v-model="password"
            variant="outline"
            placeholder="Password"
            color="primary"
            size="xl"
            type="password"
            icon="i-heroicons-lock-closed"/>
    </UFormGroup>
    <UButton color="primary" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postPassword"></UButton>
</template>
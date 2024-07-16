<script setup>
const toast = useToast()
toast.clear()

const foo = ref('')

let email = ref('')
const redirectDialogue = ref(false)

async function postEmail() {
    setTimeout(function() {
    redirectDialogue.value = true
    }, 500)

    const response = await $fetch('/api/auth/signup', {
        method: 'POST',
        body: {
            email: email.value,
            token: useState('token').value
        }
    })
    .then(response => {
        if('redirect' in response) {
            toast.add({
                title: 'Valid E-mail',
                description: 'You will be redirect as soon as possible.',
                icon: 'i-heroicons-check-circle',
                color: "primary",
                timeout: 6000,
            })
            foo.value = '/login'
            return response
        } else {
            toast.add({
                title: 'Bad E-mail',
                description: 'If the problem persists, please contact us.',
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
                foo.value = '/'
            return response
        }
    })
    .then(data => data)
    .catch(error => createError(error))

    setTimeout(function() {
        navigateTo(foo.value)
    }, 3000)
}
</script>

<template>
    <h1 class="text-2xl font-bold mb-6 text-primary">Sign Up</h1>
    <UFormGroup label="E-mail">
        <UInput
          class="caret-primary"
          padded
          v-model="email"
          variant="outline"
          placeholder="Example: email@service.com"
          type="email"
          color="primary"
          size="xl"
          icon="i-heroicons-envelope">
    </UInput>
    </UFormGroup>
    <UButton color="primary" icon="i-heroicons-paper-airplane" class="my-3" label="Submit" @click="postEmail"></UButton>    

    <UModal v-model="redirectDialogue" prevent-close>
      <UCard :ui="{ ring: '', divide: '' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Redirect
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="my-1" @click="redirectDialogue = false" />
          </div>
        </template>
        <p>You will be redirected to the log in page.</p>
        <p>After 5 seconds, if you haven't been redirect, click the button.</p>
        <UButton color="primary" class="my-3"label="Go to page" @click="navigateTo('/login')"></UButton>
      </UCard>
    </UModal>
</template>
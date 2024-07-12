<script setup>
let email = ref('')
const isOpen = ref(false)

async function postEmail() {
    setTimeout(function() {
    isOpen.value = true
    }, 500)

    const response = await $fetch('/api/auth/signup', {
        method: 'POST',
        body: {
            email: email.value,
            token: useState('token').value
        }
    })
    .then(response => response)
    .then(data => data)
    .catch(error => createError(error))

    setTimeout(function() {
        alert('timeout')
        // navigateTo('/login')
    }, 3000)
}
</script>

<template>
    <h1 class="text-2xl font-bold">Sign Up</h1>
    <br>
    <UInput
        padded
        v-model="email"
        variant="outline"
        placeholder="email@service.com"
        type="email"
        color="gray"
        size="xl"
        icon="i-heroicons-envelope"></UInput>
    <UButton class="my-3" label="Submit" @click="postEmail"></UButton>

    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Redirect
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <p>You will be redirect to the log in page.</p>
        <p>After 5 seconds, if you haven't been redirect, click the button.</p>
        <UButton class="my-3"label="Go to page" @click="navigateTo('/login')"></UButton>
      </UCard>
    </UModal>
</template>
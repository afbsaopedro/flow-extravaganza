<script setup>
let email;

function foo(){
    $fetch('/api/signup', {
        method: 'POST',
        body: {
            email: email
        }
    })
}
</script>

<template>
    <h1>signup</h1>
    <UFormGroup label="E-mail">
        <UInput v-model="email"></UInput>
    </UFormGroup>
    <UButton @click="foo">Sign up</UButton>
</template>
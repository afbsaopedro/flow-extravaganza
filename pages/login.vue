<script setup>
let password = ref('')

function foo() {
    alert(password.value)
}
</script>

<template>
    <h1>Log in</h1>
    <br>
    <UInput v-model="password" variant="outline" placeholder="Password" type="password"/>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
</template>
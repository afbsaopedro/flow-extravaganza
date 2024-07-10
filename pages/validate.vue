<script setup>
let validator = ref('')

function foo() {
    alert(validator.value)
}
</script>

<template>
    <h1>Validate</h1>
    <br>
    <UInput v-model="validator" variant="outline" placeholder="Validator"></UInput>
    <br>
    <UButton @click="foo" variant="outline">Do the foo</UButton>
</template>
<script setup lang="ts">
let id = ref('')
let validator = ref('')

function foo() {
    alert('id: ' + id.value + "\nvalidator: " + validator.value)
}

</script>

<template>
    <h1>Foo</h1>
    <UInput v-model="id" variant="outline" placeholder="ID"/>
    <UInput v-model="validator" variant="outline" placeholder="Validator"></UInput>
    <UButton @click="foo">Do the foo</UButton>
</template>
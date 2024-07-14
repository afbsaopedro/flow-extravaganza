<script setup>
const users = await $fetch('http://localhost:3000/api/users')
.then(response => response)
</script>

<template>
    <h1 class="text-2xl font-bold mt-6 text-primary">Users</h1>
    <UTable class="mb-12":rows="users" />
  </template>
<script setup>
const token = useState('token')
token.value = 'no.token.set'
</script>

<template>
    <div>
        {{ token }}
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </template>
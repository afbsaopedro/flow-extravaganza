<script setup lang="ts">

const links = [{
    label: 'Foo App',
    to: '/'
},
{
    label: 'Home',
    to: '/'
},
{
    label: 'About',
    to: '/About'
}
]

</script>

<template>
    <UHorizontalNavigation :links/>
    <UContainer>
        <slot />
    </UContainer>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>
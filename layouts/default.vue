<script setup lang="ts">

const links = [
    {
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
},
{
    label: 'Foo',
    icon: 'i-heroicons-code-bracket',
    to: '/foo'
},
{
    label: 'New User',
    icon: 'i-heroicons-user-plus',
    to: '/new'
},
{
    label: 'About',
    icon: 'i-heroicons-information-circle',
    to: '/about'
}
]

</script>

<template>
    <UHorizontalNavigation :links="links"/>
    <UContainer>
        <slot />
    </UContainer>
</template>
<script setup lang="ts">
const links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Contacts',
    icon: 'i-heroicons-phone',
    to: `/contact`
  },], [{
    label: 'New User',
    icon: 'i-heroicons-bug-ant',
    to: '/new'
  },{
    label: 'List of users',
    icon: 'i-heroicons-bug-ant',
    to: '/users'
  }]
]

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
})
</script>

<template>

<UHorizontalNavigation :links="links">
    <template #default="{ link }">
      <ClientOnly v-if="link.label === 'Theme'">
        <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark">
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </UButton>
    </ClientOnly> 
      <span v-else class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>

    <UContainer>
        <slot />
    </UContainer>
</template>
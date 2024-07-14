<script setup>

const contactEmails = [
    {
        email: 'first.contact.email@service.com',
        holder: 'Name Surname'
    },
    {
        email: 'second.contact.email@service.com',
        holder: 'Name Surname'
    },
]

const contactPhoneNumbers = [
    {
        number: '+351 696 969 696',
        holder: 'Sr. Manel'
    },
    {
        number: '6+351 696 969 696',
        holder: 'Sra. Joaquina'
    },
]

const items = [{
    label: 'E-mail',
    icon: 'i-heroicons-envelope',
    slot: 'email'
    },
    {
        label: 'Phone',
    icon: 'i-heroicons-phone',
    slot: 'phone'
    }
]
</script>

<template>
    <h1 class="text-4xl font-bold mb-6" >Contacts</h1>
    <UAccordion color="primary" variant="solid" size="xl" :items="items">
        <template #email>
            <div class="text-gray-900 dark:text-white text-center">
                <ul class="list-disc list-inside text-left pl-12">
                    <li v-for="email of contactEmails">{{ email.email }} - {{ email.holder }}</li>
                </ul>
            </div>
        </template>
        <template #phone>
            <div class="text-gray-900 dark:text-white text-center">
                <ul class="list-disc list-inside text-left pl-12">
                    <li v-for="phone of contactPhoneNumbers">{{ phone.number }} - {{ phone.holder }}</li>
                </ul>
            </div>
        </template>
    </UAccordion>
</template>
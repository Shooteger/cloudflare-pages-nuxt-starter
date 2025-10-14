<script setup lang="ts">
const items = [
    {
        label: 'Home',
        to: '/'
    },
];
</script>

<template>
    <UHeader>
        <template #left>
            <NuxtLink to="/">
                <NuxtImg src="/logo.png" width="40" height="auto" alt="Logo von MP ORG" />
            </NuxtLink>
        </template>

        <UNavigationMenu :items="items" variant="link" />

        <template #body>
            <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

useHead({
    htmlAttrs: {
        lang: 'de'
    }
})

useSeoMeta({
    title: '404 Page not found',
    description: 'This page does not exist',
})

const props = defineProps({
    error: {
        type: Object as PropType<NuxtError>,
        required: true
    }
})
</script>

<template>
    <UError :error="{
        statusCode: 404,
        statusMessage: 'This page does not exist',
    }" />
</template>
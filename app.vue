<template>
    <div class="h-screen w-screen p-4">
        <div class="h-full bg-pale-leaf-200">
            <NuxtPage />
        </div>
    </div>
</template>


<script lang="ts" setup>
import './assets/css/tailwind.css'
import "@fontsource/inter";
import "@fontsource/prata";
</script>

<style lang="css">
body {
    @apply bg-white;
}
</style>

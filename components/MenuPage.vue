<template>
    <div class="h-full p-4 bg-edelweiss">
        <header
            class="h-32 w-full text-pale-leaf-900 fill-pale-leaf-200 font-bold text-center items-center flex justify-center"
        >
            <AurelioLogo></AurelioLogo>
        </header>
        <div class="text-center py-4 text-pale-leaf-500 text-2xl hover:text-pale-leaf-600">
            <nuxt-link to="/it">ITA</nuxt-link>&nbsp;|&nbsp;
            <nuxt-link to="/en">ENG</nuxt-link>
        </div>
        <div class="my-8 grid gap-4 grid-cols-1 max-w-lg mx-auto">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.router-link-active {
    @apply text-pale-leaf-800 underline;
}
</style>

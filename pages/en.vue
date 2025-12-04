<template>
    <MenuPage>
        <MenuLink :link="`/en-menu.pdf?${rand(1000)}`">menu</MenuLink>
        <Social>Follow us</Social>
    </MenuPage>
</template>
<script setup>
const rand = function (max) {
    return Math.floor(Math.random() * max);
}
useHead({
    title: 'Menu- Restaurant Da Aurelio - Giau Pass',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
        { name: 'description', content: 'Menu - Restaurant Da Aurelio - Giau Pass' }
    ],
})
</script>

<style lang="css"></style>

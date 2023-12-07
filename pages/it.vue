<template>
    <MenuPage>
        <MenuLink :link="`/it-menu.pdf?${rand(1000)}`">menu</MenuLink>
        <MenuLink :link="`/it-vini.pdf?${rand(1000)}`">lista vini</MenuLink>
        <Social>Seguici su</Social>
    </MenuPage>
</template>
<script setup>
const rand = function (max) {
  return Math.floor(Math.random() * max);
}
useHead({
  title: 'Menu - Ristorante Da Aurelio - Passo Giau',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Menu - Ristorante Da Aurelio - Passo Giau' }
  ],
})
</script>


<style lang="css">
</style>


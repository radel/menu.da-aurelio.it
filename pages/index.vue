<template>
    <MenuPage>
        <MenuLink link="/Da-Aurelio-Menu-Inverno-2022-IT.pdf">menu</MenuLink>
        <MenuLink link="/lista-vini-BB-2022.pdf">lista vini</MenuLink>
        <Social>Seguici su</Social>
    </MenuPage>
</template>
<script setup>
useHead({
  title: 'Menu - Ristorante Da Aurelio - Passo Giau',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Menu - Ristorante Da Aurelio - Passo Giau' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>


<style lang="css">
</style>


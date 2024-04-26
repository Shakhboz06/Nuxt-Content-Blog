<template>
    <div class="main-layou mx-auto max-w-4xl">
        <div class="def-menu">
            <h1>Shahboz Shodiev</h1>
            <Menu/>
        </div>
        <slot />
    </div>
</template>

<script lang="ts" setup>
 useHead({
    titleTemplate: "%s - Shahboz Shodiev",
    link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
 })
</script>

<style>
body{
    font-family: 'Roboto';
    box-sizing: border-box;
}
.main-layout{
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.def-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  /* width: 100%; */
}
</style>
<template>
  <!-- <NuxtLayout :name="example"> -->
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>

</script>

<style >
.vue-enter-active,
.vue-leave-active {
  transition: all 0.2s;
}
.vue-enter-from,
.vue-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}

</style>
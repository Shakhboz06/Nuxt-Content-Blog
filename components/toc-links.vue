<template>
  <div>
    <ul>
      <li v-for="item in links" :key="item.id">
        <NuxtLink :to="{ path: $route.path, hash: `#${item.id}` }" :class="{ 'text-green-400': activeId === item.id }">
        {{  item.text }}
      </NuxtLink>
        <TocLinks :active-id="activeId" />
      </li>

    </ul>
  </div>
</template>

<script setup>

defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
})


</script>

<style></style>
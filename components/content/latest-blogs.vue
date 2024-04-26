<template>
    <Blogposts v-slot="{ posts }" :limit="limit">
      <div v-for="post in posts" :key="post.title">
        <NuxtLink :to="post._path" class="not-prose">{{ post.title }}</NuxtLink>
      </div>
    </Blogposts>
</template>


<script lang="ts" setup>

defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>

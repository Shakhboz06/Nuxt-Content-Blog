<template>
  <div class="main-menu">
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Main</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">Blogs</NuxtLink>
            </li>

        </ul>
      </nav>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
nav ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 14px;
}

</style>
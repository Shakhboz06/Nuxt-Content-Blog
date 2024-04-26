<template>
    <NuxtLayout>
        <section>
            <h1 class="text-4xl mb-4">{{ error.statusCode }}</h1>
            <h2 class="text-xl text-gray-500">Oops {{ error.statusMessage }}</h2>
            <button @click="handleError" class="button mt-7">
                Go to home page
            </button>
        </section>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'

useSeoMeta({
    title: "Error"
})

const props = defineProps<{
    error: NuxtError
}>()
const handleError = () => clearError({ redirect: '/' })
</script>


<style scoped>
.button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #10B981; 
  background-color: #ECFDF5;
  border: none;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button::before {
  content: '';
  position: absolute;
  top: -2px; right: -2px; bottom: -2px; left: -2px;
  background: linear-gradient(120deg, #10B981, #047857, #065F46, #10B981);
  background-size: 200% 200%;
  border-radius: 0.625rem;
  z-index: -1;
  animation: gradient-border-animation 4s ease infinite;
}

@keyframes gradient-border-animation {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 100%;
  }
}

.button:hover::before {
  opacity: 0.7;
}

.button:focus {
  outline: none;
  box-shadow: none;
}
</style>
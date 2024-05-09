<template>
  <div>
    <p class="mb-10">Projects from my Github</p>
    <section>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="item of repos" :key="item.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
          <a :href="item.html_url" target="_blank" rel="noopener noreferrer">
            <div class="flex items-center justify-between">
              <div class="font-semibold">{{ item.name }}</div>
              <div>{{ item.stargazers_count }}★</div>
            </div>
            <p class="text-sm mt-3">{{ item.description }}</p> 
          </a>
        </li>


      </ul>
    </section>

  </div>
</template>

<script lang="ts" setup>
import { type response } from '~/types/response';

const { data } = await useFetch<response[]>('https://api.github.com/users/Shakhboz06/repos')
const repos = computed(
  () => (data.value as response[])?.sort((a, b) => b.stargazers_count - a.stargazers_count)
)


const getLanguage = async() => {
  const languages = []
  for(const item of data.value as response[]){
    const {data: response} = await useFetch<response[]>(`https://api.github.com/repos/Shakhboz06/${item.name}/languages`)
    languages.push(response)
  }
  return languages
}

await getLanguage()
console.log(await getLanguage())
</script>

<style></style>
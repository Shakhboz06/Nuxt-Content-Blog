<template>
    <slot :posts="posts">
        <section class="not-prose">
            <div class="column text-gray-400 text-sm">
                <div>date</div>
                <div>title</div>
            </div>
            <ul>
                <li v-for="item in posts" :key="item._path">
                    <NuxtLink :to="item._path" class="column hover:bg-gray-200 ">
                        <div :class="{ 'text-white': !item.displayYear, 'text-gray-400': item.displayYear }">{{
                            item.year }}</div>
                        <div>{{ item.title }}</div>
                    </NuxtLink>
                </li>
            </ul>
        </section>
    </slot>
</template>

<script lang="ts" setup>

import { type blogpost } from '~/types/blogpost';


const props = defineProps({
    limit: {
        type: Number,
        default: null
    }
})
useHead({
    title: "Blog Page"

})

// const posts = await queryContent('/blog').only(['title', '_path']).find()

const { data} = await useAsyncData<blogpost[]>('/blog',
    () => {
        const query = queryContent<blogpost>('/blog').only(['title', '_path', 'date']).sort({ date: -1 })

        if (props.limit) {
            query.limit(props.limit)
        }

        return query.find()
    }
)


const posts = computed(() => {

    if (!data.value) {
        return []
    }

    const result: blogpost[] = []
    let lastYear = null

    for (let item of data.value) {
        const year = new Date(item.date).getFullYear()
        const displayYear = lastYear !== year
        item.displayYear = displayYear
        item.year = year
        result.push(item)
        lastYear = year
    }

    return result

})


</script>

<style scoped>
.column{
      @apply flex items-center space-x-8 py-2 border-b border-gray-200
    }
</style>
<template>
  <article class="prose max-w-none">
    <ContentDoc>
      <template #not-found>
      <h1>Document not Found</h1>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{'col-span-4': doc.toc, 'col-span-6': !doc.toc}">
            <ContentRenderer :value="doc"/>
          </div>
          <div class="col-span-2 not-prose" v-if="doc.toc">
            <aside class="sticky top-7">
              <div class="font-semibold mb-2">
                Table of Contents
              </div>
              <nav>
                <TocLinks :links="doc.body?.toc?.links" :active-id="activeId"/>
              </nav>
            </aside>
          </div>
        </div>
      </template>
    
    </ContentDoc>
  </article>
</template>

<script lang="ts" setup>

const activeId = ref('')
onMounted(() =>{
  let elements: NodeListOf<HTMLElement>
  const callback = (entries: IntersectionObserverEntry[]) => {
    for(let item of entries){
     if(item.isIntersecting){
      activeId.value = item.target.id
      break
     } 
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5 
  })

  setTimeout(() => {
    elements = document.querySelectorAll('h2, h3')
    for(let item of Array.from(elements)){
      observer.observe(item)
    }

    
  }, 150);
  
  onBeforeUnmount(() => {
    for(let item of Array.from(elements)){
    observer.unobserve(item)
  } 
  })
})
</script>

<style>

</style>
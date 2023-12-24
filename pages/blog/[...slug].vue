<template>
  <h1 class="text-3xl md:text-5xl mt-10 mt-14 mb-6">
    🖱️ Website Dev /
    <span class="font-semibold">Blog</span>
  </h1>
  <SiteTagline/>

  <section class="w-full transparent-bg-dark mt-8 p-8 text-white">
    <main>
      <p class="text-lg mb-5">
        Under Construction 🚧
      </p>
      <hr class="w-48">
      <ContentRenderer :value="data" class="prose prose-invert my-4 mx-auto max-w-7xl"/>
      <div class="my-8">
        <!-- 
          Link after tag page is added (Caused live build error)
          :href="`/blog/tags/${tag}`" 
         -->
        <a 
          v-for="tag in data.tags" 
          :key="tag" 
          :href="`/portfolio-nuxt-tailwind-graphql/blog`"
          class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4"
        >
          <Icon name="uil:tag" size="1.5rem" class="text-gray-100 mr-2"/>
          {{ tag }}
        </a>
      </div>
    </main>
  </section>

  <SiteBottom/>
</template>

<script setup>
const props = defineProps(['tags']);

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne();
});
</script>
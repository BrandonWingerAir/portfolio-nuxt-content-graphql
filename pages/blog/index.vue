<template>
  <h1 class="text-3xl md:text-5xl mt-10 mt-14 mb-6">
    🖱️ Website Dev /
    <span class="font-semibold">Blog</span>
  </h1>
  <SiteTagline/>

  <section class="transparent-bg mt-8 p-8">
    <h1 class="text-3xl mb-8">Blog Posts</h1>
    <hr class="w-36 mb-8">
    <BlogPosts :posts="posts"/>
  </section>

  <SiteBottom/>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
);
</script>
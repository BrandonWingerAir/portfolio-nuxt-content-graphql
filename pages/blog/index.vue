<template>
  <h1 class="text-3xl md:text-5xl mt-10 mt-14 mb-6">
    🖱️ Website Dev /
    <span class="font-semibold">Blog</span>
  </h1>
  <SiteTagline/>

  <BlogPosts :posts="posts"/>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
);
</script>
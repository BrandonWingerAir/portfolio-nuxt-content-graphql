<template>
  <section class="mb-6">
    <h1 class="text-3xl md:text-5xl mt-10 md:mt-14 mb-6">
      🖱️ Website Dev /
      <span class="font-semibold">Blog</span>
    </h1>
    <SiteTagline/>
  </section>

  <section class="transparent-bg p-8">
    <h2 class="text-2xl md:text-3xl mb-6 font-semibold">
      Blog Posts
    </h2>
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
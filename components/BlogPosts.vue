<template>
  <section class="transparent-bg mt-8 p-8">
    <h1 class="text-3xl mb-8">Blog Posts</h1>
    <hr class="w-36">
    <ul>
      <li v-for="post in posts" :key="post._id" class="my-8 pb-4 border-b-2">
        <nuxt-link :to="post._path" class="text-2xl">{{ post.title }}</nuxt-link>
        <p>{{ post.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps(['posts'])
</script>
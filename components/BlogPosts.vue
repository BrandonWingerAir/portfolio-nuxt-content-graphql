<template>
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <div 
      v-for="post in props.posts"
      :key="post.slug"
      class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75 dark:hover:opacity-85"
    >
      <NuxtLink :to="post._path">
        <img :src="`${config.public.baseURL}/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
      </NuxtLink>
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2 dark:text-neutral-900">{{ post.title }}</h2>
        <p class="text-gray-700 mb-4">{{ post.description }}</p>
        <NuxtLink
          :to="post._path"
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white pt-2 pb-3 px-4 rounded float-right mb-8"
        >
          Read More
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const props = defineProps(['posts']);
</script>
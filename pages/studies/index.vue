<template>
  <section class="mb-8 md:mb-7">
    <h1 class="text-3xl md:text-5xl mt-10 md:mt-14 mb-6">
      🖱️ Website Dev /
      <span class="font-semibold">Studies</span>
    </h1>
    <SiteTagline/>
  </section>

  <section class="mb-8 transparent-bg p-8">
    <h2 class="text-2xl md:text-3xl font-semibold mb-4">
      Case Study
    </h2>

    <p class="text-lg mb-7">
      Design choices, features and use cases during my project development.
    </p>

    <hr class="w-1/2 mb-5">

    <CaseStudies :studies="studies"/>
  </section>    
  
  <SiteBottom/>
</template>

<script setup>
const { data: studies } = await useAsyncData('studies', () => 
  queryContent('/studies').sort({ date: -1 }).find()
);
</script>
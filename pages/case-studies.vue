<template>
  <h1 class="text-3xl md:text-5xl mt-10 mt-14 mb-6">
    🖱️ Website Dev /
    <span class="font-semibold">Case Studies</span>
  </h1>
  <SiteTagline/>

  <section class="mb-8 transparent-bg p-8 mt-8">
    <p class="text-lg mb-7">
      Design choices, feature additions and use cases during my work & studies.
    </p>

    <hr class="w-1/2">
  
    <h2 class="text-2xl font-bold mt-8 mb-2">This website was built with:</h2>
    <ul class="list-disc">
      <li class="ml-8 py-1"><a href="https://nuxt.com" target="_blank">Nuxt 3</a></li>
      <li class="ml-8 py-1"><a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a></li>
      <li class="ml-8 py-1"><a href="https://graphql.org" target="_blank">GraphQL</a></li>
    </ul>

    <h2 class="text-2xl font-bold mt-8 mb-2">Custom Features:</h2>
    <ul class="list-disc">
      <li class="ml-8 py-1">Color scheme, spacing and UI decisions</li>
      <li class="ml-8 py-1">Animated gradient background</li>
      <li class="ml-8 py-1">Nuxt pages for application routes</li>
      <li class="ml-8 py-1">Github Actions workflow & API token environment secret</li>
    </ul>
  
    <h2 class="text-2xl font-bold mt-8 mb-2">Based on a tutorial series by:</h2>
    <button class="rounded-md border-0 bg-red-600 hover:bg-red-600 p-2 pt-1 mt-4 mr-3 mb-7">
      <a 
        href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gqdtrsPXR3K7nJhvYugyni" 
        aria-label="Dan Vega on YouTube"
        target="_blank"
        class="text-white"
      >
        <span class="font-semibold">Dan Vega</span> on <span class="font-semibold">YouTube</span> <Icon name="uil:youtube" size="1.1rem"/>
      </a>
    </button>

    <img src="~/assets/images/tutorial-blog-screenshot.png" alt="" class="mb-6"/>
    <h3 class="text-center">Published by <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gqdtrsPXR3K7nJhvYugyni" target="_blank" class="font-bold hover:underline">Net Ninja</a></h3>
  </section>
  
  <SiteBottom/>
</template>
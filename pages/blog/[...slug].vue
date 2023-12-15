<template>
  <h1 class="text-3xl md:text-5xl mt-14 mb-4">
    <span class="font-semibold">🖱️</span> Website Dev /
    <span class="font-bold">Blog</span>
  </h1>

  <p class="text-base text-gray-900 mt-2 mb-4 md:mb-2 p-2 italic">
    <span class="font-semibold">Project Site</span> by <a href="https://brandonwinger-air.com" target="_blank" class="hover:underline">Brandon Winger-Air</a>
  </p>

  <section class="transparent-bg-dark md:mt-16 p-8 text-white">
    <p>{{ $route.params.slug }}</p>
    <main>
      <ContentDoc #not-found>
        <p class="text-lg py-2">
          Under Construction 🚧
        </p>
      </ContentDoc>
    </main>
  </section>
</template>
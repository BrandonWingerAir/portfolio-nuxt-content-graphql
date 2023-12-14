<template>
  <h1 class="text-5xl mt-20 mb-10">
    💼 Website Dev / <span class="font-bold">Blog</span>
  </h1>
  <section class="transparent-bg-dark p-8 text-white">
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
<template>
  <h1 class="text-3xl md:text-5xl mt-14 mb-6">
    🖱️ Website Dev /
    <span class="font-semibold">Blog</span>
  </h1>
  <SiteTagline/>

  <section class="transparent-bg-dark mt-8 p-8 text-white">
    <p>{{ $route.params.slug }}</p>

    <main>
      <ContentDoc #not-found>
        <p class="text-lg py-2">
          Under Construction 🚧
        </p>
      </ContentDoc>
    </main>
  </section>

  <SiteBottom/>
</template>
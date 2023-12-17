<template>
  <h1 class="text-3xl md:text-5xl mt-10 mt-14 mb-6">
    🖱️ Website Dev /
    <span class="font-semibold">Blog</span>
  </h1>
  <SiteTagline/>

  <section class="transparent-bg-dark mt-8 p-8 text-white">
    <main>
      <ContentDoc class="prose prose-invert text-white" #not-found>
        <p class="text-lg py-2">
          Under Construction 🚧
        </p>
      </ContentDoc>
    </main>
  </section>

  <SiteBottom/>
</template>
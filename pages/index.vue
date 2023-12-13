<template>
  <section>
    <h1 class="text-5xl font-bold mt-20 mb-2">
      💼 Website Dev /
    </h1>
    <p class="text-base text-gray-900 mb-4 md:mb-2 p-2 italic">
      Built with Nuxt 3, Tailwind and GraphQL
    </p>
  </section>

  <section class="flex flex-col md:flex-row transparent-bg">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8">
      <h2 class="text-2xl md:text-3xl font-bold">
        About | Brandon Winger-Air
      </h2>
      <p class="text-lg py-2">
        I am a Developer and Designer living in Ontario, Canada with a degree in Enterprise Web & Mobile App Development. 
        I am a passionate programmer who believes in applying best practices and creating solutions, always striving to improve.
      </p>
      <p class="text-lg py-2">
        I have been developing projects for over 8 years using my knowledge, drive and experience to help clients achieve their goals. 
        I am currently seeking any full-time opportunities and open to short-term contracts or freelance projects.
      </p>
      <p class="text-lg">
        In my personal life I have two cats and an interest in media, graphics, art and technology.
        I enjoy playing instruments & music, video games, reading, exercising, nature & mountain biking and watching shows or documentaries.
      </p>
    </div>

    <img src="~/assets/images/avatar.png" alt="" id="avatar-img" class="w-1/2 md:max-w-sm p-0 md:p-8 mx-auto my-auto">
  </section>

  <section class="mb-8 transparent-bg p-8 mt-8">
    <h2 class="text-3xl font-bold">
      Latest Blog Posts
    </h2>
    <p class="text-lg py-2">
      Under Construction 🚧
    </p>
  </section>
</template>

<script>
definePageMeta({
  layout: 'animated-bg'
});
</script>
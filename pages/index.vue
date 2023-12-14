<template>
  <section class="grid md:grid-cols-2">
    <h1 class="text-3xl md:text-5xl font-bold mt-8 md:mt-14 mb-2">
      🖱️ Website Dev /
    </h1>
    <!-- <img src="~/assets/images/avatar.png" alt="" class="w-48 justify-self-end mt-4"> -->
    <a href="https://brandonwinger-air.com/web-project-calculator/" target="_blank" class="hidden md:block justify-self-end mt-12">
      <button type="button" class="w-42 h-14 text-slate-900 bg-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-md text-sm px-5 py-1 me-2 mb-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-700 dark:border-slate-700">
        <Icon name="uil:calculator" size="1.5rem" class="text-gray-800 mr-1"/> Instant Project Calculator
      </button>
    </a>
    <p class="text-base text-gray-900 mt-2 mb-4 md:mb-2 p-2 italic">
      Built with Nuxt 3, Tailwind and GraphQL
    </p>
  </section>

  <section class="transparent-bg p-8 mt-3">
    <h2 class="text-3xl font-bold">
      Latest Blog Posts
    </h2>
    <p class="text-lg py-2">
      Under Construction 🚧
    </p>
  </section>

  <img src="~/assets/images/avatar.png" alt="" class="w-48 mx-auto">

  <section class="flex flex-col md:flex-row transparent-bg mb-10 md:mb-12">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8 md:pr-2">
      <h2 class="text-2xl md:text-3xl font-bold text-center md:text-left">
        <span class="border-gray-800 md:border-0 text-center pb-4 md:pb-0 font-semibold md:font-bold border-b-2">About</span> <span class="hidden md:inline-block">|</span> <span class="block md:inline-block mt-8 md:mt-0"></span>Brandon Winger-Air
      </h2>
      <hr class="mt-6 mb-4 border-gray-600">
      <p class="text-lg py-2">
        <b>Developer</b> and <b>Designer</b> living in <b>Ontario, Canada</b> with a degree in <b>Enterprise Web & Mobile App Development</b>. 
      </p>
      <p class="text-lg py-2">
        I am a passionate programmer who is applying best practices, creating solutions and always striving to improve.
      </p>
      <p class="text-lg py-2">
        I have been developing projects for over 8 years using my knowledge, ideas and experience to help clients achieve their goals. 
        I am currently seeking any full-time opportunities and open to short-term contracts or freelance projects.
      </p>
      <p class="text-lg">
        In my personal life I have two cats and an interest in multimedia, art, music and technology.
        I enjoy playing instruments, video games, reading, exercising, nature, mountain biking and watching shows or documentaries.
      </p>
    </div>

    <div class="w-1/2 md:max-w-sm p-0 md:p-10 self-center mx-auto mt-9 mb-6 md:mt-0">
      <img src="~/assets/images/Brandon_Winger-Air_logo.png" alt="" class="mx-auto my-auto">
    </div>
  </section>
</template>

<script>
definePageMeta({
  layout: 'animated-bg'
});
</script>
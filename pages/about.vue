<template>
  <section class="grid md:grid-cols-2">
    <h1 class="text-3xl md:text-5xl mt-14 mb-2">
      🖱️ Website Dev /
      <span class="font-bold">About</span>
    </h1>
    <p class="text-base text-gray-900 mb-4 md:mb-2 p-2 italic">
      Built with Nuxt 3, Tailwind and GraphQL
    </p>
  </section>

  <section class="flex flex-col md:flex-row transparent-bg mt-4 mb-10 md:mb-12">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8 md:pr-2">
      <div class="flex justify-between">
        <h2 class="w-full text-2xl md:text-3xl font-bold text-center md:text-left">
          Brandon Winger-Air
        </h2>
        <a href="https://github.com/BrandonWingerAir" target="_blank" class="hidden justify-self-end font-semibold pt-2">
          Github <Icon name="uil:github" size="1.75rem" class="text-gray-800 ml-1 -mt-1"/>
        </a>
      </div>
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
      <img src="~/assets/images/profile.png" alt="" class="mx-auto my-auto border-2 border-slate-700">
    </div>
  </section>
</template>
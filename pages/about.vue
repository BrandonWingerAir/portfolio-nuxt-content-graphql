<template>
  <section class="grid grid-cols-2">
    <h1 class="text-5xl mt-14 mb-2">
      🖱️ Website Dev /
      <span class="font-bold">About</span>
    </h1>
    <img src="~/assets/images/avatar.png" alt="" id="avatar-img" class="w-48 justify-self-end mt-4">
    <p class="text-base text-gray-900 -mt-10 mb-4 md:mb-2 p-2 italic">
      Built with Nuxt 3, Tailwind and GraphQL
    </p>
  </section>

  <section class="flex flex-col md:flex-row transparent-bg mt-4">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8">
      <div class="flex justify-between">
        <h2 class="text-2xl md:text-3xl font-bold">
          Brandon Winger-Air
        </h2>
        <a href="https://github.com/BrandonWingerAir" target="_blank" class="justify-self-end font-semibold pt-2">
          Github <Icon name="uil:github" size="1.75rem" class="text-gray-800 ml-1 -mt-1"/>
        </a>
      </div>
      <hr class="mt-6 mb-4 border-gray-600">
      <p class="text-lg py-2">
        I am an IT Developer and Designer living in Ontario, Canada with a degree in Enterprise Web & Mobile App Development. 
        I am a passionate programmer who is learning best practices, creating solutions and always striving to improve.
      </p>
      <p class="text-lg py-2">
        I have been developing projects for over 8 years using my knowledge, ideas and experience to help clients achieve their goals. 
        I am currently seeking any full-time opportunities and open to short-term contracts or freelance projects.
      </p>
      <p class="text-lg">
        In my personal life I have two cats and an interest in media, graphics, art and technology.
        I enjoy playing instruments & music, video games, reading, exercising, nature, mountain biking and watching shows or documentaries.
      </p>
    </div>

    <img src="~/assets/images/Brandon_Winger-Air_logo.png" alt="" id="avatar-img" class="w-1/2 md:max-w-sm p-0 md:p-8 mx-auto my-auto">
  </section>
</template>
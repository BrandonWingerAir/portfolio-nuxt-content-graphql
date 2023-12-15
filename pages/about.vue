<template>
  <section class="grid md:grid-cols-2">
    <h1 class="text-3xl md:text-5xl mt-14 mb-4">
      <span class="font-semibold">🖱️</span> Website Dev /
      <span class="font-bold">About</span>
    </h1>

    <a href="https://brandonwinger-air.com/web-project-calculator/" target="_blank" class="hidden md:block justify-self-end mt-12">
      <button type="button" class="w-42 h-14 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        <Icon name="uil:calculator" size="1.5rem" class="text-cyan-600 mr-1"/> Time & Cost Estimate Calculator
      </button>
    </a>

    <p class="text-base text-gray-900 mb-4 md:mb-2 p-2 italic">
      Built with Nuxt 3, Tailwind and GraphQL
    </p>
  </section>

  <section class="flex flex-col md:flex-row transparent-bg-gray text-neutral-100 mt-4 md:mb-12">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8 md:pr-2">
      <div class="flex justify-between">
        <h2 class="w-full text-2xl md:text-3xl font-bold text-center md:text-left mb-2">
          Brandon Winger-Air
        </h2>

        <button class="hidden md:block w-32 h-10 bg-slate-200 hover:bg-slate-300 rounded-md -mt-1">
          <a href="https://github.com/BrandonWingerAir" target="_blank" class="text-slate-800 text-right justify-self-end font-semibold">
            Github <Icon name="uil:github" size="1.75rem" class="text-green-500 ml-1 -mt-1"/>
          </a>
        </button>
      </div>

      <hr class="mt-6 mb-4 border-gray-400">

      <p class="text-lg py-2">
        <b>Developer</b> and <b>Designer</b> living in <b class="font-normal md:bold">Ontario, Canada</b> with a degree in <b>Enterprise Web & Mobile App Development</b>. 
      </p>
      <p class="text-lg py-2">
        I am a passionate programmer who enjoys learning, implementing best practices, solving challenges and always striving to improve.
      </p>
      <p class="text-lg py-2">
        I have been developing for 8+ years using my knowledge, research and diverse experience to help clients achieve their goals. 
      </p>
      <p class="text-lg py-2">
        In my personal life I have two cats and an interest in the arts, media and technology.
        I enjoy playing instruments, video games, exercising, nature, mountain biking and watching shows or documentaries.
      </p>
      <p class="text-lg font-bold">
        I am currently seeking any long-term opportunities and open to contracts or freelance projects.
      </p>

      <div class="mt-6 mb-2">
        <a href="mailto:brandon.air.web@gmail.com" id="btn-animated">
          <svg width="278" height="62">
            <defs>
                <linearGradient id="grad1">
                    <stop offset="0%" stop-color="#BFFF80"/>
                    <stop offset="100%" stop-color="#80FFFF" />
                </linearGradient>
            </defs>
            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
          </svg>

          <span id="btn-animated-light">Contact Me</span>
        </a>
      </div>
    </div>

    <div class="w-1/2 md:max-w-sm p-0 md:p-10 self-center mx-auto mt-9 mb-6 md:mt-0">
      <img src="~/assets/images/profile.png" alt="" class="w-85 mx-auto my-auto border-2 border-zinc-100 rounded-full">
    </div>
  </section>

  <img src="~/assets/images/avatar.png" alt="" class="w-48 mx-auto">
</template>
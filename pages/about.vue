<template>
  <section class="grid md:grid-cols-2">
    <h1 class="text-3xl md:text-5xl mt-14 mb-4">
      🖱️ Website Dev /
      <span class="font-semibold">About</span>
    </h1>
    <EstimateLinkBtn/>
    <SiteTagline/>
  </section>

  <section class="flex flex-col md:flex-row transparent-bg-gray text-neutral-200 mt-4 md:mb-12">
    <div class="order-last md:order-first md:w-3/4 pt-0 md:pt-8 p-8 md:pr-2">
      <div class="flex justify-between">
        <h2 class="w-full text-2xl md:text-4xl font-thin text-center md:text-left mb-2">
          Brandon Winger-Air
        </h2>

        <button class="hidden md:block w-32 h-10 bg-slate-200 hover:bg-slate-300 rounded-md -mt-1">
          <a href="https://github.com/BrandonWingerAir" target="_blank" class="text-slate-800 text-right justify-self-end font-semibold">
            Github <Icon name="uil:github" size="1.75rem" class="text-green-500 ml-1 -mt-1"/>
          </a>
        </button>
      </div>

      <hr class="mt-6 mb-4 border-gray-400">

      <AboutDescription/>

      <div class="mt-6 mb-4">
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

  <SiteBottom/>
</template>
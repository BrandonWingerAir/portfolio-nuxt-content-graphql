<template>
  <section class="grid md:grid-cols-2">
    <h1 class="text-3xl md:text-5xl mt-10 md:mt-14 mb-4">
      🖱️ Website Dev /
      <span class="font-semibold">Home</span>
    </h1>
    <EstimateLinkBtn/>
    <SiteTagline/>
  </section>

  <section class="transparent-bg p-8 mt-3 mb-10">
    <h2 class="text-2xl md:text-3xl font-bold">
      Latest Blog Posts
    </h2>
    <p class="text-lg py-2">
      Under Construction 🚧
    </p>
  </section>
  
  <section class="flex flex-col md:flex-row transparent-bg">
    <div class="md:w-3/4 pt-8 p-8 md:pr-2">
      <h2 class="text-2xl md:text-3xl font-bold text-center md:text-left">
        <span class="border-gray-800 md:border-0 text-center pb-5 md:pb-0 font-semibold md:font-semibold border-b-2">About Me </span><span class="hidden md:inline-block font-semibold">|</span> <span class="block md:inline-block mt-10 md:mt-0 font-normal">Brandon Winger-Air</span>
      </h2>

      <hr class="mt-6 mb-4 border-gray-600">

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

          <span>Get In Touch</span>
        </a>
      </div>
    </div>

    <div class="w-1/2 md:max-w-sm p-0 md:p-10 self-center mx-auto mb-6 md:mt-0">
      <img src="~/assets/images/Brandon_Winger-Air_logo.png" alt="" class="mx-auto my-auto">
    </div>
  </section>

  <SiteBottom/>
</template>

<script>
import AboutDescription from '~/components/AboutDescription.vue';

definePageMeta({
  layout: 'animated-bg'
});
</script>
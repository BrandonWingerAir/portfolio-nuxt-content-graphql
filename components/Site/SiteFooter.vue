<template>
  <footer class="bg-gray-800">
    <section class="h-40 md:h-24 lg:h-17 mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row items-center grid md:grid-cols-3 grid-rows-2 md:grid-rows-1">
      <p class="ml-2 lg:ml-3 justify-self-center md:justify-self-start">&copy; Brandon Winger-Air | 2023.</p>

      <a href="https://streamelements.com/brandonwinger-air/tip" target="_blank" class="justify-self-center">
        <button 
          type="button" 
          id="contribute-btn"
          class="w-42 h-10 text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-semibold rounded-md text-sm px-5 py-1 opacity-90 border-slate-400 mb-5 sm:mb-0 ml-1 lg:ml-0"
        >
          Support future development <Icon name="uil:coffee" size="1.5rem" class="text-amber-900 hover:text-amber-300"/>
        </button>
      </a>

      <div class="justify-self-center md:justify-self-end flex flex-row justify-center gap-4 mr-5 mb-4 sm:mb-0">
        <a v-for="link in links" :key="link.name" :href="link.href" target="_blank">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300"/>
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
const links = [
  { name: 'Github', href: 'https://github.com/BrandonWingerAir', icon: 'uil:github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bwingerair/', icon: 'uil:linkedin' }
]
</script>

<style>
#contribute-btn {
  border-width: 1px;
}
</style>
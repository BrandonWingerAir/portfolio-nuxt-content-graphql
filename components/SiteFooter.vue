<template>
  <footer class="bg-gray-800">
    <section class="h-16 mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row items-center">
      <p class="flex-1 ml-1">&copy; Brandon Winger-Air | 2023.</p>

      <div class="flex flex-row justify-center gap-4 mr-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
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
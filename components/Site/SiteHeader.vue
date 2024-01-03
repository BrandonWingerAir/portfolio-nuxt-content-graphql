<template>
  <Disclosure as="nav" class="bg-neutral-100 dark:bg-gray-800 border-b-1 border-b-gray-900" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center" @click="changeValue">
            💻
          </div>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a 
                v-for="item in navigation" 
                :key="item.name" 
                :href="item.href" 
                :class="[item.current ? 'bg-neutral-200 dark:bg-gray-900 text-black dark:text-white uppercase' : ' text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white uppercase', 'rounded-md px-3 py-2 text-sm font-medium']" 
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="relative flex rounded-full dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <a href="https://brandonwinger-air.com" target="_blank" class="md:uppercase dark:text-white font-light text-base">
                  <span class="hidden md:inline-block">Main</span> Portfolio 💼
                </a>
              </MenuButton>
            </div>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute();
const config = useRuntimeConfig();

const navigation = [
  { name: 'Home', href: `${config.public.baseURL}/`, current: route.name == 'index' },
  { name: 'Blog', href: `${config.public.baseURL}/blog`, current: route.name.includes('blog') },
  { name: 'Projects', href: `${config.public.baseURL}/projects`, current: route.name == 'projects' },
  { name: 'Case Studies', href: `${config.public.baseURL}/studies`, current: route.name.includes('studies') },
  { name: 'About', href: `${config.public.baseURL}/about`, current: route.name == 'about' },
]

const colorMode = useColorMode();

function changeValue(){
  console.log(colorMode.preference)
    colorMode.preference = "system"
}

</script>
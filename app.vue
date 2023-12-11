<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader/>
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage/>
    </main>
    <SiteFooter/>
  </div>
</template>

<style>
body {
  background: linear-gradient(-45deg, #f44336, #e91e63, #673ab7, #23a6d5, #23d5ab, #4caf50);
  background-size: 400% 400%;
	animation: gradient 25s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
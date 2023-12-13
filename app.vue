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

.transparent-bg {
  background: rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.transparent-bg-dark {
  background: rgba(0, 0, 0, 0.95);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}
</style>
<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader/>
    <NuxtLayout class="grow">
      <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-start w-full">
        <NuxtPage/>
      </main>
    </NuxtLayout>
    <SiteFooter/>
  </div>
</template>

<style>
/* Transparent Backgrounds */
.transparent-bg {
  background: rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.transparent-bg-dark {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.transparent-bg-gray {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Dark Mode Backgrounds */
.dark-mode .transparent-bg {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.dark-mode .transparent-bg-dark {
  background: rgba(0, 0, 0, 0.95);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.dark-mode .transparent-bg-gray {
  background: rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Slug pages heading rule & list icons */
.prose :where(hr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-color: #bdbdbd;
}

.prose :where(ul > li):not(:where([class~="not-prose"], [class~="not-prose"] *))::marker {
  color: #000
}
</style>
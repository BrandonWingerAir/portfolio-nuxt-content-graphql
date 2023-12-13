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
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
  background: rgba(0, 0, 0, 0.95);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.transparent-bg-gray {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Contact Button (Home & About pages) */
#btn-animated {
    position: relative;
    display: inline-block;
    width: 278px;
    height: 50px;
    font-size: 1em;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration:none;
    font-family: 'Roboto', sans-serif;
    font-weight:900;
    font-size:17px;
    letter-spacing: 0.045em;
    left: 50%;
    margin-left: -142px;
}

#btn-animated svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  #btn-animated svg rect {
    /* stroke: #BFFF80; */
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
}

#btn-animated span {
  background: rgb(23,23,23);
  background: -moz-linear-gradient(left,  rgba(23,23,23,1) 0%, rgba(38,38,38,1) 100%);
  background: -webkit-linear-gradient(left,  rgba(23,23,23,1) 0%,rgba(38,38,38,1) 100%);
  background: linear-gradient(to right,  rgba(23,23,23,1) 0%,rgba(38,38,38,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#171717', endColorstr='#262626',GradientType=1 );
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#btn-animated #btn-animated-light {
  background: rgb(250,250,250);
  background: -moz-linear-gradient(left,  rgba(250,250,250,1) 0%, rgba(245,245,245,1) 100%);
  background: -webkit-linear-gradient(left,  rgba(250,250,250,1) 0%,rgba(245,245,245,1) 100%);
  background: linear-gradient(to right,  rgba(250,250,250,1) 0%,rgba(245,245,245,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafafa', endColorstr='#f5f5f5',GradientType=1 );
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#btn-animated:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
}
</style>
<template>
  <section class="grid md:grid-cols-2">
    <h1 class="text-3xl md:text-5xl mt-10 mt-14 mb-4">
      🖱️ Website Dev /
      <span class="font-semibold">Projects</span>
    </h1>
    <EstimateLinkBtn/>
    <SiteTagline/>
  </section>

  <section class="mb-8 transparent-bg p-8 mt-8">
    <h2 class="text-3xl font-bold mb-8">
      Recent Projects
    </h2>
    <hr class="w-56 mb-6">
    <section class="grid grid-cols-2 gap-10">
      <div 
        v-for="project in data?.viewer.repositories.nodes" 
        :key="project.id" 
        class="p-8 border-4 mt-4 rounded-lg border-white bg-gray-900"
      >
        <a :href="project.url" target="_blank">
          <h2 class="text-2xl text-gray-100 font-semibold mb-2 hover:underline">
            {{ project.name }}
          </h2>
        </a>
        <p class="text-gray-300">{{ project.description }}</p>
        <div class="text-white">
          <button class="rounded-md bg-sky-500 hover:bg-sky-600 p-2 pt-1 mt-4 mr-3">View Site</button>
          <button class="rounded-md bg-emerald-500 hover:bg-emerald-600 p-2 pt-1">View Code</button>
        </div>
        <!-- <div class="mt-4">
          <Icon name="uil:star" size="1.1rem" class="text-indigo-700"/> Stars: {{ project.stargazerCount }}
          <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-700"/> Forks: {{ project.forkCount }}
          <Icon name="uil:eye" size="1.1rem" class="text-indigo-700"/> Watchers: {{ project.watchers.totalCount }}
        </div> -->
      </div>
    </section>
  </section>

  <SiteBottom/>
</template>

<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}, privacy: PUBLIC) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          # forkCount
          # watchers {
          #   totalCount
          # }
          # stargazerCount
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
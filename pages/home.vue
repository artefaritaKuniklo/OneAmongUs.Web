<template>
  <div>
    <h1>test</h1>
    <NuxtLink to="/home">Home</NuxtLink>

    <NuxtLink to="/about">About</NuxtLink>

    <ContentList path="/people" v-slot="{ list }">
      <div v-for="people in list" :key="people._path">
        <h2>{{ people._path }}</h2>
      </div>
    </ContentList>
  </div>
</template>
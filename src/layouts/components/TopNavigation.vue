<template>
  <section class="wrap-top-navigation d-flex justify-space-between">
    <a @click="goTo({ name: 'list-task' })">Tasks</a>
    <a @click="goTo({ name: 'home-page' })">Home</a>
    <a @click="goTo({ name: 'list-quest' })">Quests</a>
    <a>Quizzes</a>
    <a>Categories</a>
    <a>Quiz Lab</a>
    <a>Create</a>
    <a>Community</a>
    <a>Multiplayer</a>
    <a>News</a>
  </section>
</template>

<style lang="scss">
  .wrap-top-navigation {}
</style>
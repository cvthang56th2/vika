<template>
  <div>
    Admin Layout
    <div class="d-flex">
      <ul class="pr-2">
        <li>
          <a class="mr-1" @click="goTo({ name: 'home-page' })">Go to web</a>
        </li>
        <li>
          <a class="mr-1" @click="goTo({ name: 'admin-home' })">Home</a>
        </li>
        <li>
          <a @click="goTo({ name: 'admin-list-quest' })">Quests</a>
        </li>
        <li>
          <a @click="goTo({ name: 'admin-list-user' })">Users</a>
        </li>
        <li>
          <a @click="goTo({ name: 'admin-list-task' })">Tasks</a>
        </li>
        <li>
          <a @click="goTo({ name: 'admin-list-task-tag' })">Task Tags</a>
        </li>
      </ul>
      <section class="wrap-content">
        <router-view />
      </section>
    </div>
  </div>
</template>
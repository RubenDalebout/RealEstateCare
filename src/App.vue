<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { triangle, ellipse, square  } from 'ionicons/icons';
</script>

<template>
  <header class="bg-dark">
    <div class="bg-primary p-2 d-flex justify-content-end gap-2">
      <ion-icon id="iconbar-square" :icon="square"></ion-icon>
      <ion-icon id="iconbar-ellipse" :icon="ellipse"></ion-icon>
      <ion-icon id="iconbar-triangle" :icon="triangle"></ion-icon>
    </div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
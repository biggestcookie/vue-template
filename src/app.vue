<script setup lang="ts">
import NavbarComponent from "./components/navbar.component.vue";
</script>

<template>
  <div data-theme="dark">
    <NavbarComponent />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

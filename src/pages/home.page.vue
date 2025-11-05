<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("Hello world");
});
</script>

<template>
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-one-third">
        <div class="hero-body has-text-centered">
          <p class="title">Hero title</p>
          <p class="subtitle">Hero subtitle</p>
        </div>
      </div>
    </div>
  </section>
</template>

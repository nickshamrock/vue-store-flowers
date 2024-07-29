<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import FooterMenu from './components/FooterMenu.vue';
</script>

<template>
  <HeaderMenu></HeaderMenu>
  <!-- Router-Content -->
  <main>
    <router-view></router-view>
    <!-- Router-Content -->
  </main>
  <hr class="style-eight" />
  <FooterMenu></FooterMenu>
</template>

<style scoped>
hr.style-eight {
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
}
hr.style-eight:after {
  content: '§';
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}
</style>

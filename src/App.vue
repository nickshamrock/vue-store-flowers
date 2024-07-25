<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import MainPage from './components/MainPage.vue';
import FooterMenu from './components/FooterMenu.vue';
</script>

<template>
  <HeaderMenu></HeaderMenu>
  <MainPage></MainPage>
  <router-view></router-view>
  <FooterMenu></FooterMenu>
</template>

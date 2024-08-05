<script setup>
import SocialMenuVerticalView from '../SocialMenuVerticalView.vue';
</script>

<template>
  <section class="h-[1244px] w-full">
    <div
      class="relative h-full w-full bg-[url('/images/expiremental-background.png')] bg-cover bg-center bg-no-repeat"
    >
      <header class="mb-5 h-fit w-full">
        <nav class="flex flex-wrap items-center justify-start pl-40 pr-40">
          <img src="/logo.png " class="mr-14 block" />
          <div class="flex flex-wrap gap-14">
            <a
              href="#"
              class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
              >Каталог</a
            >
            <a
              href="#"
              class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
              >Доставка и оплата</a
            >
            <a
              href="#"
              class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
              >О нас</a
            >
            <a
              href="#"
              class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
              >Контакты</a
            >
            <a
              href="#"
              class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
              >FAQ</a
            >
            <div class="mr-16 flex hover:cursor-pointer">
              <img src="/icons/search-icon.svg" height="18px" width="18px" class="mr-3 block" />
              <input
                class="block w-24 bg-black font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white outline-none placeholder:text-white"
                placeholder="Поиск"
              />
            </div>
          </div>
        </nav>
      </header>

      <div class="flex flex-col items-center justify-center">
        <div
          class="text-center font-['Cormorant_Garamond'] text-[200px] font-light uppercase leading-[242px] tracking-[29px] text-white max-sm:hidden"
        >
          <p class="mb-[-90px]">Lover</p>
          <h1>Flower</h1>
        </div>
        <p class="mb-12 text-center font-[Oswald] text-xl leading-[29px] tracking-wide text-white">
          Создаём для тех, кто ценит свежесть и изящество цветка
        </p>
        <button
          type="button"
          value=""
          class="h-14 w-56 bg-[#43FFD2] px-[50px] py-4 font-[Oswald] text-xs font-bold uppercase leading-4 tracking-widest text-black"
        >
          Смотреть каталог
        </button>
      </div>

      <social-menu-vertical-view></social-menu-vertical-view>

      <div class="gradient absolute bottom-0 z-40 -mb-1 h-1/3 w-full"></div>
      <img src="/images/lover-flower-signature.png" class="absolute bottom-2 right-24 z-50" />
    </div>
  </section>
</template>

<style scoped>
.gradient {
  background: rgb(4, 10, 10);
  background: linear-gradient(
    0deg,
    rgba(4, 10, 10, 1) 0%,
    rgba(4, 10, 10, 0.499124649859944) 50%,
    rgba(4, 4, 10, 0) 100%
  );
}
</style>

<script setup>
import SocialMenuVerticalView from '../components/SocialMenuVerticalView.vue';
import HeaderMenuTransparent from '../components/HeaderMenuTransparent.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="h-[1244px] w-full bg-black" id="first-section">
    <div
      class="z-[-6] h-full w-full bg-[url('images/homepage/expiremental-background.png')] bg-cover bg-no-repeat max-[1441px]:bg-none"
    >
      <div class="relative z-[10] h-full w-full">
        <div
          class="absolute left-0 right-0 top-0 z-[-10] m-auto h-[1244px] max-w-[1440px] bg-[url('images/homepage/black-background-for-first-section.png')] bg-contain bg-no-repeat min-[1441px]:invisible"
        ></div>

        <div
          class="absolute left-0 right-0 top-0 z-[-9] m-auto h-[961px] max-w-[1440px] bg-[url('/images/homepage/ellipses-for-firsr-section/elipses-for-first-section.png')] bg-contain bg-no-repeat min-[1441px]:invisible"
        ></div>

        <div
          class="absolute left-0 right-0 top-0 z-[-7] m-auto h-[975px] max-w-[1440px] bg-[url('/images/homepage/flowers-under-the-black-background.png')] bg-contain bg-no-repeat min-[1441px]:invisible"
        ></div>
        <p
          class="absolute left-0 right-0 top-[93px] z-[-8] m-auto w-[788px] font-['Cormorant'] text-[200px] font-light uppercase leading-[242.2px] tracking-[40px] text-white"
        >
          Lover
        </p>

        <!-- Это прозрачное меню сверху -->
        <div class="mb-[47px]">
          <header-menu-transparent></header-menu-transparent>
        </div>
        <!-- Это прозрачное меню сверху -->

        <div class="z-[300] mt-[170px] flex flex-col items-center justify-center">
          <div
            class="w-[983px] font-['Cormorant'] text-[200px] font-light uppercase leading-[242px] tracking-[40px] text-white"
          >
            <h1>Flower</h1>
          </div>
          <p class="mb-12 text-center font-[Oswald] text-xl leading-[29px] tracking-wide text-white">
            Создаём для тех, кто ценит свежесть и изящество цветка
          </p>
          <router-link to="/catalog">
            <button
              type="button"
              value=""
              class="h-14 w-56 bg-[#43FFD2] px-[50px] py-4 font-[Oswald] text-xs font-bold uppercase leading-4 tracking-widest text-black"
            >
              Смотреть каталог
            </button>
          </router-link>
        </div>

        <!-- Это меню справа -->
        <div class="absolute right-[165px] top-6">
          <social-menu-vertical-view></social-menu-vertical-view>
        </div>
        <!-- Это меню справа -->

        <div class="gradient absolute bottom-0 z-[40] -mb-1 h-1/3 w-full"></div>

        <img src="/images/homepage/lover-flower-signature.png" class="absolute bottom-2 right-24 z-50" />
      </div>
    </div>
  </section>

  <section
    class="relative flex h-[1029px] w-full justify-between overflow-x-hidden overflow-y-hidden bg-black pl-[165px] pr-[165px]"
    id="second-section"
  >
    <div class="relative z-50 mt-[100px] flex flex-col">
      <h2 class="mb-[229px] font-['Cormorant'] text-[100px] uppercase leading-[121px] tracking-wide text-white">
        каталог
      </h2>

      <div class="absolute left-[95px] top-[131px] flex flex-col gap-[30px]">
        <p class="line-clamp-3 w-[540px] font-['Oswald'] text-xl font-light leading-[26px] tracking-wide text-white">
          У нас самый большой выбор цветов, букетов, открыток и подарков.<br />
          Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет
          определиться с выбором
        </p>
        <p class="font-['Oswald'] text-xl font-light leading-[29px] tracking-wide text-white">
          Ознакомьтесь с нашими разделами каталога
        </p>
      </div>

      <div
        class="flex h-[310px] w-[540px] flex-col rounded-[20px] bg-[#00000033] pb-[30px] pl-[31px] pr-[30px] pt-[30px] backdrop-blur"
      >
        <ul class="mb-auto ml-5 list-disc font-[Oswald] text-lg uppercase leading-[27px] tracking-wider text-white">
          <h3
            class="mb-[10px] font-['Oswald'] text-3xl font-bold uppercase leading-[44px] tracking-wider text-[#43FFD2]"
          >
            Цветы
          </h3>
          <li>Сборные букеты</li>
          <li>Монобукеты</li>
          <li>Композиции из цветов</li>
          <li>розы</li>
          <li>свадебные</li>
        </ul>
        <router-link
          to="/catalog"
          class="self-end font-['Oswald'] text-xs font-bold uppercase leading-[18px] tracking-widest text-[#D978AC] underline underline-offset-1"
        >
          смотреть каталог
        </router-link>
      </div>
    </div>

    <div class="z-50 mt-[231px] flex flex-col items-end gap-[30px]">
      <div
        class="flex h-[281px] w-[445px] flex-col rounded-[20px] bg-[#00000033] pb-[30px] pl-[31px] pr-[30px] pt-[30px] backdrop-blur"
      >
        <ul class="mb-auto ml-5 list-disc font-[Oswald] text-lg uppercase leading-[27px] tracking-wider text-white">
          <h3
            class="mb-[10px] font-['Oswald'] text-3xl font-bold uppercase leading-[44px] tracking-wider text-[#43FFD2]"
          >
            готовые букеты<br />из сухоцветов
          </h3>
          <li>букеты</li>
          <li>для интерьера</li>
          <li>Композиции</li>
        </ul>
        <router-link
          to="/catalog"
          class="self-end font-['Oswald'] text-xs font-bold uppercase leading-[18px] tracking-widest text-[#D978AC] underline underline-offset-1"
        >
          смотреть каталог
        </router-link>
      </div>

      <div
        class="flex h-[264px] w-[540px] flex-col rounded-[20px] bg-[#00000033] pb-[30px] pl-[50px] pr-[30px] pt-[30px] backdrop-blur"
      >
        <ul class="mb-auto ml-5 list-disc font-[Oswald] text-lg uppercase leading-[27px] tracking-wider text-white">
          <h3
            class="mb-[10px] font-['Oswald'] text-3xl font-bold uppercase leading-[44px] tracking-wider text-[#43FFD2]"
          >
            дополнительно
          </h3>
          <li>шары</li>
          <li>игрушки</li>
          <li>открытки</li>
          <li>упаковка</li>
        </ul>
        <router-link
          to="/catalog"
          class="self-end font-['Oswald'] text-xs font-bold uppercase leading-[18px] tracking-widest text-[#D978AC] underline underline-offset-1"
        >
          смотреть каталог
        </router-link>
      </div>
    </div>

    <img
      src="/images/homepage/ellipses-for-second-section/green-ellipse-second-section.png"
      class="absolute bottom-[-50px] right-[-1px] z-10 block overflow-x-hidden overflow-y-hidden opacity-100"
    />

    <img
      src="/images/homepage/ellipses-for-second-section/pink-ellipse-second-section.png"
      class="absolute bottom-[-70px] left-[-1px] z-10 opacity-100"
    />
    <span
      class="absolute right-[-59px] top-[134px] z-20 font-['Oswald'] text-[200px] font-bold uppercase leading-[296px] tracking-[0.033em] text-[#0A1717]/70 mix-blend-screen"
      >букеты</span
    >
    <span
      class="absolute left-[-28px] top-[361px] z-20 font-['Oswald'] text-[200px] font-bold uppercase leading-[296px] tracking-[0.033em] text-[#0A1717]/40 mix-blend-screen"
      >Цветы</span
    >
    <span
      class="absolute bottom-[190px] left-[650px] z-20 font-['Oswald'] text-[200px] font-bold uppercase leading-[200px] tracking-[0.033em] text-[#0A1717]/70 mix-blend-screen"
      >дополнительно</span
    >
  </section>
</template>

<style scoped>
.gradient {
  background: rgb(4, 10, 10);
  background: linear-gradient(0deg, rgba(4, 10, 10, 1) 0%, rgba(4, 10, 10, 0.5) 50%, rgba(4, 4, 10, 0) 100%);
}
</style>

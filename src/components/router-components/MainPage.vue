<script setup>
import SocialMenuVerticalView from '../SocialMenuVerticalView.vue';
import HeaderMenuTransparent from '../HeaderMenuTransparent.vue';
</script>

<template>
  <section class="h-[1244px] w-full" id="first-section">
    <div
      class="relative h-full w-full bg-[url('/images/expiremental-background.png')] bg-cover bg-center bg-no-repeat"
    >
      <!-- сделать наложение по ширине 1440px? например, через display:visible -->
      <header-menu-transparent></header-menu-transparent>

      <div class="flex flex-col items-center justify-center">
        <div
          class="text-center font-['Cormorant'] text-[200px] font-light uppercase leading-[242px] tracking-[29px] text-white max-sm:hidden"
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

  <section
    class="relative flex h-[1029px] w-full justify-between overflow-x-hidden bg-black pl-[165px] pr-[165px]"
    id="second-section"
  >
    <div class="relative z-50 mt-[100px] flex flex-col">
      <h2
        class="mb-[229px] font-['Cormorant'] text-[100px] uppercase leading-[121px] tracking-wide text-white"
      >
        каталог
      </h2>

      <div class="absolute left-[95px] top-[131px] flex flex-col gap-[30px]">
        <p
          class="line-clamp-3 w-[540px] font-['Oswald'] text-xl font-light leading-[26px] tracking-wide text-white"
        >
          У нас самый большой выбор цветов, букетов, открыток и подарков.<br />
          Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас
          проконсультирует и поможет определиться с выбором
        </p>
        <p class="font-['Oswald'] text-xl font-light leading-[29px] tracking-wide text-white">
          Ознакомьтесь с нашими разделами каталога
        </p>
      </div>

      <div
        class="flex h-[310px] w-[540px] flex-col rounded-[20px] pb-[30px] pl-[31px] pr-[30px] pt-[30px] backdrop-blur-lg"
      >
        <ul
          class="mb-auto ml-5 list-disc font-[Oswald] text-lg uppercase leading-[27px] tracking-wider text-white"
        >
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
        <a
          href="#"
          class="self-end font-['Oswald'] text-xs font-bold uppercase leading-[18px] tracking-widest text-[#D978AC] underline underline-offset-1"
        >
          смотреть каталог</a
        >
      </div>
    </div>

    <div class="z-50 mt-[231px] flex flex-col items-end gap-[30px]">
      <div
        class="flex h-[281px] w-[445px] flex-col rounded-[20px] pb-[30px] pl-[31px] pr-[30px] pt-[30px] backdrop-blur-lg"
      >
        <ul
          class="mb-auto ml-5 list-disc font-[Oswald] text-lg uppercase leading-[27px] tracking-wider text-white"
        >
          <h3
            class="mb-[10px] font-['Oswald'] text-3xl font-bold uppercase leading-[44px] tracking-wider text-[#43FFD2]"
          >
            готовые букеты<br />из сухоцветов
          </h3>
          <li>букеты</li>
          <li>для интерьера</li>
          <li>Композиции</li>
        </ul>
        <a
          href="#"
          class="self-end font-['Oswald'] text-xs font-bold uppercase leading-[18px] tracking-widest text-[#D978AC] underline underline-offset-1"
        >
          смотреть каталог</a
        >
      </div>

      <div
        class="flex h-[264px] w-[540px] flex-col rounded-[20px] pb-[30px] pl-[50px] pr-[30px] pt-[30px] backdrop-blur-lg"
      >
        <ul
          class="mb-auto ml-5 list-disc font-[Oswald] text-lg uppercase leading-[27px] tracking-wider text-white"
        >
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
        <a
          href="#"
          class="self-end font-['Oswald'] text-xs font-bold uppercase leading-[18px] tracking-widest text-[#D978AC] underline underline-offset-1"
        >
          смотреть каталог</a
        >
      </div>
    </div>

    <img
      src="/images/ellipses-for-second-section/green-ellipse-second-section.png"
      class="absolute bottom-1 right-[-1px] z-10"
    />

    <img
      src="/images/ellipses-for-second-section/pink-ellipse-second-section.png"
      class="absolute left-[-1px] z-10"
    />
    <span
      class="transparent absolute right-[-59px] top-[134px] z-20 font-['Oswald'] text-[200px] font-bold uppercase leading-[296px] tracking-[0.033em] text-gray-300"
      >букеты</span
    >
    <span
      class="transparent absolute left-[-28px] top-[361px] z-20 font-['Oswald'] text-[200px] font-bold uppercase leading-[296px] tracking-wider text-gray-300"
      >Цветы</span
    >
    <span
      class="transparent absolute bottom-[190px] left-[650px] z-20 font-['Oswald'] text-[200px] font-bold uppercase leading-[200px] tracking-wider text-white"
      >дополнительно</span
    >
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

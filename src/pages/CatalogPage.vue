<script setup>
import HeaderMenuTransparent from '../components/HeaderMenuTransparent.vue';
import SocialMenuVerticalView from '../components/SocialMenuVerticalView.vue';
</script>

<template>
  <section class="h-[3064px] w-full bg-slate-500">
    <div class="mb-[47px]">
      <header-menu-transparent></header-menu-transparent>
    </div>

    <div class="pl-[165px]" id="catalog-preview">
      <div class="mb-[23px] flex font-['Oswald'] text-xs uppercase leading-[18px] tracking-[0.48px] text-white">
        <p>
          <router-link to="/">Главная</router-link> /
          <router-link to="/catalog">Каталог</router-link>
        </p>
      </div>

      <div
        class="h-[534px] w-[920px] rounded-[20px] bg-[#0000004D] pb-[30px] pl-[20px] pr-[10px] pt-[15px] backdrop-blur"
      >
        <h1 class="mb-[-20px] font-['Cormorant'] text-[100px] uppercase leading-[121px] tracking-wide text-white">
          Каталог
        </h1>
        <div class="mb-[59px] pl-[285px]">
          <p class="mb-[20px] font-['Cormorant'] text-[100px] uppercase leading-[121px] tracking-wide text-white">
            Букетов
          </p>
          <p class="font-['Oswald'] text-sm uppercase leading-[20.75px] tracking-[0.64px] text-white">
            В нашем магазине самый большой выбор букетов для любых<br />
            событий:
          </p>
        </div>
        <div
          class="flex flex-col gap-[10px] font-['Oswald'] text-xs uppercase leading-[17.78px] tracking-[0.48px] text-white"
        >
          <div class="flex gap-[10px]">
            <button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Букеты из гипсофил</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Букеты из ромашек</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Букеты из хризантем</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Комнатные цветы в горшках</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Монобукеты
            </button>
          </div>

          <div class="flex flex-row gap-[10px]">
            <button
              class="h-[40px] whitespace-nowrap rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase"
            >
              Сборные букеты
            </button>
            <button
              class="h-[40px] whitespace-nowrap rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase"
            >
              Букет на праздник
            </button>
            <button
              class="h-[40px] whitespace-nowrap rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase"
            >
              Композиции из цветов
            </button>
            <button class="h-[40px] rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Конверты
            </button>
            <button class="h-[40px] rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Открытки
            </button>
            <button class="h-[40px] rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Подарки
            </button>
            <button class="rounded-[40px] border-[0.5px] border-white px-[11px] py-[11px] uppercase tracking-[0.48px]">
              Букеты из сухоцветов
            </button>
          </div>

          <div class="flex gap-[10px]">
            <button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">Шары</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">Популярное</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">Букеты роз</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Цветы на похороны</button
            ><button class="rounded-[40px] border-[0.5px] border-white px-[16px] py-[11px] uppercase">
              Упаковка подарков
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute right-[165px] top-6">
      <social-menu-vertical-view></social-menu-vertical-view>
    </div>

    <router-link to="/" class="text-[30px] text-emerald-700">Назад на главную страницу</router-link>
  </section>
</template>

<style scoped></style>

<script setup>
import HeaderMenuTransparent from '../components/HeaderMenuTransparent.vue';
import SocialMenuVerticalView from '../components/SocialMenuVerticalView.vue';
import LeftFilterMenuForCatalog from '@/components/LeftFilterMenuForCatalog.vue';
import FilterMenuByButtons from '@/components/FilterMenuByButtons.vue';
</script>

<template>
  <section class="h-[3064px] w-full bg-slate-500">
    <!-- Верхняя навигация -->
    <div class="mb-[47px]">
      <header-menu-transparent></header-menu-transparent>
    </div>
    <!-- Верхняя навигация -->

    <!-- Меню с контактами и ссылками справа -->
    <div class="absolute right-[165px] top-6">
      <social-menu-vertical-view></social-menu-vertical-view>
    </div>
    <!-- Меню с контактами и ссылками справа -->

    <div class="mb-[30px] pl-[165px]" id="catalog-preview-and-buttons">
      <!-- Пагинация -->
      <div class="mb-[23px] flex font-['Oswald'] text-xs uppercase leading-[18px] tracking-[0.48px] text-white">
        <p>
          <router-link to="/">Главная</router-link> /
          <router-link to="/catalog">Каталог</router-link>
        </p>
      </div>
      <!-- Пагинация -->

      <!-- Заголовок + фильтр по кнопкам -->
      <filter-menu-by-buttons></filter-menu-by-buttons>
      <!-- Заголовок + фильтр по кнопкам -->
    </div>

    <!-- Здесь начинается весь каталог -->
    <div class="pl-[165px] pr-[165px] outline outline-2 outline-cyan-50" id="catalog">
      <!-- Это поле select -->
      <div class="mb-[10px] flex justify-end">
        <div class="relative">
          <select
            class="h-[40px] w-[257px] appearance-none rounded-[10px] bg-[#00000033] py-[10px] pl-[20px] font-['Oswald'] text-xs font-light uppercase leading-[17.78px] tracking-[0.48px] text-white outline-none backdrop-blur"
            name="select"
          >
            <option value="value1" selected class="rounded-xl bg-black">По популярности</option>
            <option value="value2" class="rounded-xl bg-black">Значение 2</option>
            <option value="value3" class="rounded-xl bg-black">Значение 3</option>
          </select>
          <img class="absolute right-[16px] top-[16px] block" src="/images/catalog/select-arrow.svg" />
        </div>
      </div>
      <!-- Это поле select -->

      <div class="flex gap-[30px]">
        <!-- Это левое меню с фильтрами-чекбоксами -->
        <left-filter-menu-for-catalog></left-filter-menu-for-catalog>
        <!-- Это левое меню с фильтрами-чекбоксами-->

        <div class="h-[818px] w-[825px] outline outline-2 outline-cyan-50"></div>
      </div>
    </div>

    <router-link to="/" class="text-[30px] text-emerald-700">Назад на главную страницу</router-link>
  </section>
</template>

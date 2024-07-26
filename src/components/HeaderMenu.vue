<template>
  <header class="h-20 w-full bg-[#040A0A]">
    <nav class="flex items-center justify-between pl-[165px] pr-[165px]">
      <img src="/logo.png" class="mr-[60px] block" />
      <div class="flex gap-[50px]">
        <a
          href="#"
          class="font-[Oswald] text-sm uppercase leading-[20.75px] tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
          >Каталог</a
        >
        <a
          href="#"
          class="font-[Oswald] text-sm uppercase leading-[20.75px] tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
          >Доставка и оплата</a
        >
        <a
          href="#"
          class="font-[Oswald] text-sm uppercase leading-[20.75px] tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
          >О нас</a
        >
        <a
          href="#"
          class="font-[Oswald] text-sm uppercase leading-[20.75px] tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
          >Контакты</a
        >
        <a
          href="#"
          class="font-[Oswald] text-sm uppercase leading-[20.75px] tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
          >FAQ</a
        >
        <div class="mr-[153px] flex gap-[10px]">
          <!-- Не забыть переделать в поле input -->
          <img src="/search-icon.svg" height="18px" width="18px" />
          <p class="font-[Oswald] text-sm uppercase leading-[20.75px] tracking-widest text-white">
            Поиск
          </p>
          <!-- Не забыть переделать в поле input -->
        </div>
      </div>
      <div class="mr-[21px] flex gap-[10px]">
        <img src="/phone-icon.svg" height="18px" width="18px" />
        <a
          href="tel:+375291136969"
          class="font-[Oswald] text-sm leading-[20.75px] tracking-widest text-[#43FFD2]"
          >+375 (29) 113-69-69</a
        >
      </div>
      <div class="relative">
        <a href="#" class="block p-[15px]">
          <img src="/basket-icon.svg" height="30px" width="30px" class="block" />
        </a>
        <span
          class="absolute right-[8px] top-[12px] h-[16px] w-[16px] rounded-[50%] bg-[#43FFD2] text-center align-middle font-[Oswald] text-xs"
          >5</span
        >
      </div>
    </nav>
  </header>
</template>

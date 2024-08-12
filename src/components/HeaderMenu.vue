<template>
  <header class="h-fit w-full bg-[#040A0A]">
    <nav class="flex flex-wrap items-center justify-between pl-40 pr-40">
      <img src="/logo.png" class="mr-14 block" />
      <div class="flex flex-wrap gap-14">
        <a
          href="/catalog"
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
        <div class="mr-16 flex">
          <img src="/search-icon.svg" height="18px" width="18px" class="mr-3 block" />
          <input
            class="block w-24 bg-black font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white outline-none placeholder:text-white"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div class="mr-5 flex gap-3">
        <img src="/phone-icon.svg" height="18px" width="18px" class="block" />
        <a
          href="tel:+375291136969"
          class="font-[Oswald] text-sm leading-5 tracking-widest text-[#43FFD2]"
          >+375 (29) 113-69-69</a
        >
      </div>
      <div class="relative">
        <a href="#" class="block p-4">
          <img src="/basket-icon.svg" height="30px" width="30px" class="block" />
        </a>
        <span
          class="absolute right-[8px] top-[12px] h-4 w-4 rounded-[50%] bg-[#43FFD2] text-center align-middle font-[Oswald] text-xs"
          >5</span
        >
      </div>
    </nav>
  </header>
</template>

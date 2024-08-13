<template>
  <header class="h-fit w-full">
    <nav
      class="flex flex-wrap items-center justify-start pl-[165px] pr-[165px] hover:cursor-pointer"
    >
      <img src="/logo.png " class="mr-14 block" />
      <div class="flex flex-wrap gap-14">
        <a
          href=""
          class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white hover:text-[#43FFD2] hover:underline hover:underline-offset-2"
          ><router-link to="/catalog">Каталог</router-link></a
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
            class="block w-24 bg-black bg-transparent font-[Oswald] text-sm uppercase leading-5 tracking-widest text-white outline-none placeholder:text-white"
            placeholder="Поиск"
            id="search-input"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

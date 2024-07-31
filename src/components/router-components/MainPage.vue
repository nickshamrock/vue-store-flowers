<template>
  <section class="h-[1440px] w-full">
    <div
      class="relative h-full w-full bg-[url('/images/expiremental-background.png')] bg-cover bg-center bg-no-repeat"
    >
      <header class="mb-[52px] h-fit w-full">
        <nav class="flex flex-wrap items-center justify-start pl-40 pr-40">
          <img src="/logo.png" class="mr-14 block" />
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
              <img src="/search-icon.svg" height="18px" width="18px" class="mr-3 block" />
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
          class="mb-9 text-center font-['Cormorant_Garamond'] text-[200px] font-light uppercase leading-[242px] tracking-[60px] text-white max-sm:hidden"
        >
          <p class="mb-[-80px]">Lover</p>
          <h1>Flower</h1>
        </div>
        <p class="mb-12 font-[Oswald] text-xl leading-8 tracking-wider text-white">
          Создаём для тех, кто ценит свежесть и изящество цветка
        </p>
        <button
          type="button"
          value=""
          class="h-14 w-56 bg-[#43FFD2] px-14 py-4 font-[Oswald] text-xs font-bold uppercase leading-4 tracking-widest text-black"
        >
          Смотреть каталог
        </button>
      </div>

      <!-- <img src="/images/green-ellipse.png" class="absolute" /> -->
      <div class="hidden">
        <a
          href="tel:+375291136969"
          class="block font-[Oswald] text-sm leading-5 tracking-widest text-[#43FFD2]"
          >+375 (29) 113-69-69</a
        >
        <img src="/phone-icon.svg" height="18px" width="18px" class="block" />
        <p class="text-white">Заказать звонок</p>
        <p class="text-white">zakaz@loverflower.by</p>
        <p class="text-white">Доставка 24/7 по договоренности с оператором</p>
        <p class="text-white">ул. Тимирязева 67</p>
        <p class="text-white">10:00 до 21:00 без выходных</p>
        <div class="relative w-16 bg-black">
          <a href="#" class="block p-4">
            <img src="/basket-icon.svg" height="30px" width="30px" class="block" />
          </a>
          <span
            class="absolute right-[8px] top-[12px] h-4 w-4 rounded-[50%] bg-[#43FFD2] text-center align-middle font-[Oswald] text-xs"
            >5</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

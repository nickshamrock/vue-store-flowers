<template>
  <section class="h-[1440px] w-full">
    <div
      class="scroll relative top-0 h-full w-full bg-[url('/images/black-background-for-first-section.png')] bg-cover bg-center bg-no-repeat"
    >
      <img
        src="/public/images/flowers-under-the-black-background.png"
        class="absolute z-[999] block h-[975px] w-[1440px] sepia"
      />
      <div class="absolute left-0 right-0 top-[93px] z-20 m-auto w-[983px]">
        <p class="cormorant -z-20">Lover</p>
        <h1 class="cormorant">Flower</h1>
      </div>
      <header class="h-fit w-full">
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
      <!-- <img src="/images/green-ellipse.png" class="absolute" /> -->
      <div class="hidden">
        <h1 class="font-[Cormorant] text-white">Lover Flower</h1>
        <p class="text-white">Создаём для тех, кто ценит свежесть и изящество цветка</p>
        <button type="button" value="" class="text-white outline-dashed outline-2">
          Смотреть каталог
        </button>
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

<style scoped>
.cormorant {
  font-size: 200px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-style: normal;
  color: white;
  text-transform: uppercase;
  line-height: 242px;
  letter-spacing: 40px;
}
</style>

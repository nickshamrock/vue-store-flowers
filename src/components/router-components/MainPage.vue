<template>
  <section class="h-[1244px] w-full">
    <div
      class="relative h-full w-full bg-[url('/images/expiremental-background.png')] bg-cover bg-center bg-no-repeat"
    >
      <header class="mb-5 h-fit w-full">
        <nav class="flex flex-wrap items-center justify-start pl-40 pr-40">
          <img src="/public/logo.png " class="mr-14 block" />
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
              <img
                src="/public/icons/search-icon.svg"
                height="18px"
                width="18px"
                class="mr-3 block"
              />
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

      <div class="absolute right-[165px] top-6 flex flex-col items-end">
        <div class="mb-7 flex flex-col items-end gap-1">
          <a
            href="malito:zakaz@loverflower.by"
            class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-[#43FFD2]"
          >
            zakaz@loverflower.by
          </a>
          <!-- подключить шрифты через google fonts -->
          <p
            class="font-[Oswald] text-[10px] font-thin uppercase leading-3 tracking-widest text-white"
          >
            Доставка 24/7 по договоренности с оператором
          </p>
        </div>

        <div class="mb-16 flex flex-col items-end">
          <p class="mb-1 font-[Oswald] text-sm uppercase leading-5 tracking-widest text-[#43FFD2]">
            ул. Тимирязева 67
          </p>
          <p
            class="font-[Oswald] text-[10px] font-thin uppercase leading-3 tracking-widest text-white"
          >
            10:00 до 21:00
          </p>
          <p
            class="font-[Oswald] text-[10px] font-thin uppercase leading-3 tracking-widest text-white"
          >
            без выходных
          </p>
        </div>

        <div
          class="mb-[184px] flex flex-col items-center gap-5 rounded-xl px-5 py-5 backdrop-blur-3xl"
        >
          <a href="#"><img src="/public/icons/instagram-icon.svg" /></a>
          <a href="#"><img src="/public/icons/whatsapp-icon.svg" /></a>
          <a href="#"><img src="/public/icons/viber-icon.svg" /></a>
        </div>

        <div class="mb-5 flex flex-col items-end gap-2">
          <a
            href="tel:+375291136969"
            class="font-[Oswald] text-base leading-6 tracking-widest text-[#43FFD2]"
            >+375 (29) 113-69-69</a
          >
          <button
            type="button"
            class="flex items-center gap-2 rounded-xl px-5 py-3 backdrop-blur-3xl"
          >
            <img src="/public/icons/phone-icon.svg" height="16px" width="16px" class="block" />
            <p class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-[#43FFD2]">
              Заказать звонок
            </p>
          </button>
        </div>

        <div class="relative w-16 rounded-xl bg-[#00000033] backdrop-blur-3xl">
          <a href="#" class="block p-4">
            <img src="/public/icons/basket-icon.svg" height="30px" width="30px" class="block" />
          </a>
          <span
            class="absolute right-[8px] top-[12px] h-4 w-4 rounded-[50%] bg-[#43FFD2] text-center align-middle font-[Oswald] text-xs"
            >5</span
          >
        </div>
      </div>
      <div class="gradient absolute bottom-0 z-40 h-1/3 w-full"></div>
      <img
        src="/public/images/lover-flower-signature.png"
        class="absolute bottom-2 right-24 z-50"
      />
    </div>
  </section>
</template>

background: linear-gradient(180deg, rgba(4, 10, 10, 0) 0%, #040A0A 100%);

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

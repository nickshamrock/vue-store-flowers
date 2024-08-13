<script setup></script>

<template>
  <div class="absolute right-[165px] top-6 flex flex-col items-end">
    <div class="mb-7 flex flex-col items-end gap-1">
      <a
        href="malito:zakaz@loverflower.by"
        class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-[#43FFD2]"
      >
        zakaz@loverflower.by
      </a>
      <!-- подключить шрифты через google fonts -->
      <p class="font-[Oswald] text-[10px] font-light uppercase leading-3 tracking-widest text-white">
        Доставка 24/7 по договоренности с оператором
      </p>
    </div>

    <div class="mb-16 flex flex-col items-end">
      <p class="mb-1 font-[Oswald] text-sm uppercase leading-5 tracking-widest text-[#43FFD2]">ул. Тимирязева 67</p>
      <p class="font-[Oswald] text-[10px] font-light uppercase leading-3 tracking-widest text-white">10:00 до 21:00</p>
      <p class="font-[Oswald] text-[10px] font-light uppercase leading-3 tracking-widest text-white">без выходных</p>
    </div>

    <div class="mb-[184px] flex flex-col items-center gap-5 rounded-xl px-5 py-5 backdrop-blur-3xl">
      <a href="#"><img src="/icons/instagram-icon.svg" /></a>
      <a href="#"><img src="/icons/whatsapp-icon.svg" /></a>
      <a href="#"><img src="/icons/viber-icon.svg" /></a>
    </div>

    <div class="mb-5 flex flex-col items-end gap-2">
      <a href="tel:+375291136969" class="font-[Oswald] text-base leading-6 tracking-widest text-[#43FFD2]"
        >+375 (29) 113-69-69</a
      >
      <button type="button" class="flex items-center gap-2 rounded-xl border border-white px-5 py-3 backdrop-blur-3xl">
        <img src="/icons/phone-icon.svg" height="16px" width="16px" class="block" />
        <p class="font-[Oswald] text-sm uppercase leading-5 tracking-widest text-[#43FFD2]">Заказать звонок</p>
      </button>
    </div>

    <div class="relative w-16 rounded-xl bg-[#00000033] backdrop-blur-3xl">
      <a href="#" class="block p-4">
        <img src="/icons/basket-icon.svg" height="30px" width="30px" class="block" />
      </a>
      <span
        class="absolute right-[8px] top-[12px] h-4 w-4 rounded-[50%] bg-[#43FFD2] text-center align-middle font-[Oswald] text-xs"
        >5</span
      >
    </div>
  </div>
</template>

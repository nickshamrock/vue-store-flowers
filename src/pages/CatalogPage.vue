<script setup>
import HeaderMenuTransparent from '../components/HeaderMenuTransparent.vue';
import SocialMenuVerticalView from '../components/SocialMenuVerticalView.vue';
</script>

<template>
  <section class="h-[3064px] w-full bg-slate-500">
    <div class="mb-[47px]">
      <header-menu-transparent></header-menu-transparent>
    </div>

    <div class="absolute right-[165px] top-6">
      <social-menu-vertical-view></social-menu-vertical-view>
    </div>

    <div class="mb-[30px] pl-[165px]" id="catalog-preview-and-buttons">
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

    <div class="pl-[165px] pr-[165px] outline outline-2 outline-cyan-50" id="catalog">
      <!-- Это поле select согласно макету, где можно выбрать по популярности и другим фильтрам -->
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
      <!-- Это поле select согласно макету, где можно выбрать по популярности и другим фильтрам -->

      <div class="flex gap-[30px]">
        <!-- Это меню с фильтрами-радиокнопками -->
        <div
          class="flex h-[818px] w-[255px] flex-col gap-[20px] font-['Oswald'] uppercase outline outline-2 outline-cyan-50"
        >
          <div class="flex flex-col items-start outline outline-2 outline-cyan-50">
            <p>По свету</p>
            <label><input type="radio" name="light" value="gentle" />Нежные</label>
            <label><input type="radio" name="light" value="bright" />Яркие</label>
          </div>

          <div class="flex flex-col items-start outline outline-2 outline-cyan-50">
            <p>По цвету</p>
            <label><input type="radio" name="color" value="white" />Белый</label>
            <label><input type="radio" name="color" value="yellow" />Желтый</label>
            <label><input type="radio" name="color" value="green" />Зеленый</label>
            <label><input type="radio" name="color" value="red" />Красный</label>
            <label><input type="radio" name="color" value="orange" />Оранжевый</label>
            <label><input type="radio" name="color" value="pink" />Розовый</label>
            <label><input type="radio" name="color" value="blue" />Синий</label>
          </div>

          <div class="flex flex-col items-start outline outline-2 outline-cyan-50">
            <p>По формату</p>
            <label><input type="radio" name="format" />Букет</label>
            <label><input type="radio" name="format" />В вазе</label>
            <label><input type="radio" name="format" />в конверте</label>
            <label><input type="radio" name="format" />в корзине</label>
            <label><input type="radio" name="format" />в шляпной коробке</label>
            <label><input type="radio" name="format" />в ящике</label>
          </div>

          <div class="flex flex-col items-start outline outline-2 outline-cyan-50">
            <p>Стоимость</p>
            <input type="range" min="1" max="100" value="50" id="myRange" />
            <p>Цена: 50.00 ₽ – 400.00 ₽</p>
          </div>

          <div class="flex flex-col items-start outline outline-2 outline-cyan-50">
            <p>По цветку</p>
            <label><input type="radio" name="flower" />Альстромерия (2)</label>
            <label><input type="radio" name="flower" />Антуриум (1)</label>
            <label><input type="radio" name="flower" />Аспарагус (1)</label>
            <label><input type="radio" name="flower" />Астильба (7)</label>
            <label><input type="radio" name="flower" />Астранция (1)</label>
          </div>

          <button type="button" class="uppercase">Cбросить фильтр</button>
        </div>
        <!-- Это меню с фильтрами-радиокнопками -->

        <div class="h-[818px] w-[825px] outline outline-2 outline-cyan-50"></div>
      </div>
    </div>

    <router-link to="/" class="text-[30px] text-emerald-700">Назад на главную страницу</router-link>
  </section>
</template>

<style scoped></style>

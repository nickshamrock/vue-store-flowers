<template>
  <div
    class="flex h-auto w-[255px] flex-col gap-[20px] rounded-[20px] bg-[#0000004D] px-[16px] pb-[30px] pt-[20px] font-['Oswald'] text-xs font-light uppercase leading-[17.78px] tracking-[0.48px] text-white backdrop-blur"
  >
    <div class="flex flex-col items-start gap-[5px]">
      <p class="mb-[8px] text-sm font-bold leading-[20.75px] tracking-[0.56px] text-[#43FFD2]">По свету</p>
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="light" value="gentle" />Нежные</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="light" value="bright" />Яркие</label
      >
    </div>

    <div class="flex flex-col items-start gap-[5px]">
      <p class="mb-[8px] text-sm font-bold leading-[20.75px] tracking-[0.56px] text-[#43FFD2]">По цвету</p>
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="white" />Белый</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="yellow" />Желтый</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="green" />Зеленый</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="red" />Красный</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="orange" />Оранжевый</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="pink" />Розовый</label
      >
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="color" value="blue" />Синий</label
      >
    </div>

    <div class="flex flex-col items-start gap-[5px]">
      <p class="mb-[8px] text-sm font-bold leading-[20.75px] tracking-[0.56px] text-[#43FFD2]">По формату</p>
      <label class="flex items-center"><input type="checkbox" class="checkbox-input" name="format" />Букет</label>
      <label class="flex items-center"><input type="checkbox" class="checkbox-input" name="format" />В вазе</label>
      <label class="flex items-center"><input type="checkbox" class="checkbox-input" name="format" />в конверте</label>
      <label class="flex items-center"><input type="checkbox" class="checkbox-input" name="format" />в корзине</label>
      <label class="flex items-center"
        ><input type="checkbox" class="checkbox-input" name="format" />в шляпной коробке</label
      >
      <label class="flex items-center"><input type="checkbox" class="checkbox-input" name="format" />в ящике</label>
    </div>

    <div class="flex flex-col items-start">
      <p class="mb-[10px] text-sm font-bold leading-[20.75px] tracking-[0.56px] text-[#43FFD2]">Стоимость</p>
      <input type="range" min="50" max="400" value="100" id="myRange" class="price-range mb-[10px]" />
      <p>Цена: 50.00 ₽ – 400.00 ₽</p>
    </div>

    <div class="flex flex-col items-start gap-[5px]">
      <p class="mb-[8px] text-sm font-bold leading-[20.75px] tracking-[0.56px] text-[#43FFD2]">По цветку</p>
      <label class="flex items-center"
        ><input type="checkbox" name="flower" class="checkbox-input" />Альстромерия (2)</label
      >
      <label class="flex items-center"
        ><input type="checkbox" name="flower" class="checkbox-input" />Антуриум (1)</label
      >
      <label class="flex items-center"
        ><input type="checkbox" name="flower" class="checkbox-input" />Аспарагус (1)</label
      >
      <label class="flex items-center"
        ><input type="checkbox" name="flower" class="checkbox-input" />Астильба (7)</label
      >
      <label class="flex items-center"
        ><input type="checkbox" name="flower" class="checkbox-input" />Астранция (1)</label
      >
    </div>

    <button
      type="button"
      class="h-[50px] w-[223px] px-[53px] py-[16px] font-bold uppercase tracking-[1.2px] outline outline-1 outline-white"
    >
      Cбросить фильтр
    </button>
  </div>
</template>

<style scoped>
.checkbox-input {
  appearance: none;
  width: 12px;
  height: 12px;
  border: 0.5px solid #ffffff;
  border-radius: 2px;
  background-color: transparent;
  margin-right: 6px;
  cursor: pointer;
  position: relative;
}

.checkbox-input:checked::before {
  content: '';
  position: absolute;
  bottom: 5px;
  width: 10px;
  height: 10px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  transition: all 1s ease-out;
}

.price-range {
  -webkit-appearance: none; /* Для Safari и Chrome */
  -moz-appearance: none; /* Для Firefox */
  appearance: none;
  width: 100%;
  height: 1px;
  background: #ffffff;
  outline: none;
  opacity: 0.7;
  border-radius: 2px;
  position: relative;
}

/* Шарики на концах слайдера */
.price-range::before,
.price-range::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: #43ffd2;
  border-radius: 50%;
  z-index: 1;
}

.price-range::before {
  left: 0;
}

.price-range::after {
  right: 0;
}

.price-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  background: #43ffd2;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.price-range::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #43ffd2;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.price-range::-ms-thumb {
  width: 16px;
  height: 16px;
  background: #43ffd2;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

/* Стили для IE */
.price-range::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

.price-range::-ms-fill-lower {
  background: #ffffff;
  border-radius: 2px;
}

.price-range::-ms-fill-upper {
  background: #ffffff;
  border-radius: 2px;
}
</style>

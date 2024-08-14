<script setup>
import SocialMenuCompactView from './SocialMenuCompactView.vue';
</script>

<template>
  <footer class="flex min-h-[337px] w-full justify-between bg-[#040A0A] px-[165px]">
    <div class="flex h-auto max-w-[254px] flex-col">
      <img src="/logo.png" class="mb-2 block h-[75px] w-[34px]" />
      <h3 class="footer-h3 mb-[10px]">Реквизиты</h3>
      <p class="footer-p">
        ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781,
        р/с BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого
      </p>
    </div>

    <div class="flex h-auto flex-col pt-[30px]">
      <a href="/catalog" class="footer-a-like-h3 mb-[10px]">Каталог</a>
      <div class="flex flex-col gap-1">
        <a href="/catalog" class="footer-a">Популярное</a>
        <a href="/catalog" class="footer-a">Сухоцветы</a>
        <a href="/catalog" class="footer-a">Букеты роз</a>
        <a href="/catalog" class="footer-a">Композиции из цветов</a>
        <a href="/catalog" class="footer-a">Индивидуальный букет</a>
        <a href="/catalog" class="footer-a">Букет на праздник</a>
        <a href="/catalog" class="footer-a">Упаковка подарков</a>
        <a href="/catalog" class="footer-a">Шары</a>
        <a href="/catalog" class="footer-a">Открытки</a>
        <a href="/catalog" class="footer-a">Конверты</a>
      </div>
    </div>

    <div class="flex h-auto flex-col pt-[30px]">
      <a href="#" class="footer-a-like-h3 mb-[10px]">Букет</a>
      <div class="footer-a flex flex-col gap-1">
        <a href="#">Для девушки</a>
        <a href="#">Для мужчины</a>
        <a href="#">Для жены</a>
        <a href="#">Для мамы</a>
        <a href="#">Для коллеги</a>
        <a href="#">Для начальника</a>
        <a href="#">Для дочки</a>
        <a href="#">Для детей</a>
        <a href="#">Для женщины</a>
      </div>
    </div>
    <div class="footer-a-like-h3 flex h-auto max-w-40 flex-col gap-5 pt-[30px]">
      <a href="#">Доставка и оплата </a>
      <a href="#">О нас</a>
      <a href="#"> FAQ</a>
      <a href="#">Контакты</a>
      <a href="#">для корпоративных клиентов</a>
    </div>
    <div class="h-auto pt-[30px]">
      <social-menu-compact-view></social-menu-compact-view>
    </div>
  </footer>
</template>

<style scoped>
.footer-h3,
.footer-a-like-h3 {
  font-family: 'Oswald';
  font-size: 14px;
  color: #43ffd2;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 20.75px;
  letter-spacing: 1px;
}

.footer-p,
.footer-a {
  font-family: 'Oswald';
  font-size: 12px;
  color: #ffffff;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 17.78px;
  letter-spacing: 1px;
}
</style>

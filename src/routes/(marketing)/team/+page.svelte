<script lang="ts">
  import { WebsiteName } from "../../../config"
</script>

<svelte:head>
  <title>Схема распределения ролей — {WebsiteName}</title>
  <meta
    name="description"
    content="Командные роли и принципы взаимодействия StopFires.org: ядро стартапа и внешние партнёры."
  />
  <meta name="og:title" content="Схема распределения ролей — {WebsiteName}" />
  <meta
    name="og:description"
    content="Командные роли: продакт, дизайнер, разработчик, биздев. Модель Early Birds для партнёров."
  />
  <meta name="og:type" content="article" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
  <div class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        🏅 Схема распределения ролей в StopFires.org
      </h1>
      <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
    </div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">🎯 Концепция</h2>
      <p class="text-gray-700 mb-4">
        Команда проекта StopFires.org строится по принципу спортивной команды.
      </p>
      <p class="text-gray-700 mb-4">Это означает:</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>ясное распределение ролей,</li>
        <li>прозрачные правила взаимодействия,</li>
        <li>общий результат важнее индивидуальных титулов.</li>
      </ul>
      <p class="text-gray-700">Вайб — не семьи или трудового коллектива.</p>
      <p class="text-gray-700">Вайб — спортивный с прицелом на скейл-ап.</p>
    </section>

    <div class="w-full border-t border-gray-200 my-6"></div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        ⚡ Ядро стартапа (Core Team)
      </h2>
      <p class="text-gray-700 mb-4">
        Минимальный состав ядра включает четыре роли:
      </p>

      <ol class="list-decimal list-inside text-gray-900 space-y-4">
        <li>
          <p class="font-semibold">Продакт (Product Manager)</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mt-1">
            <li>формирует продуктовую стратегию,</li>
            <li>
              собирает потребности пользователей (пожарные, добровольцы,
              координаторы),
            </li>
            <li>приоритизирует функциональность.</li>
          </ul>
        </li>
        <li>
          <p class="font-semibold">Продуктовый дизайнер (Product Designer)</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mt-1">
            <li>отвечает за пользовательский опыт (UX),</li>
            <li>проектирует интерфейсы и CJM,</li>
            <li>обеспечивает визуальную и смысловую целостность продукта.</li>
          </ul>
        </li>
        <li>
          <p class="font-semibold">
            Разработчик (Tech Lead / Full-Stack Engineer)
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mt-1">
            <li>реализует архитектуру решения,</li>
            <li>
              отвечает за кодовую базу, инфраструктуру и масштабируемость.
            </li>
          </ul>
        </li>
        <li>
          <p class="font-semibold">БизДев (Business Development Manager)</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mt-1">
            <li>развивает партнёрства,</li>
            <li>валидирует бизнес-модель,</li>
            <li>отвечает за выход на рынки и поиск первых клиентов.</li>
          </ul>
        </li>
      </ol>
    </section>

    <div class="w-full border-t border-gray-200 my-6"></div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        🌍 Внешние партнёры (Early Birds)
      </h2>
      <p class="text-gray-700 mb-4">
        Для первых партнеров предусмотрена модель бесплатных лицензий с правом
        представления проекта на локальных рынках.
      </p>
      <p class="text-gray-700 mb-3">Принципы:</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>права неэксклюзивные;</li>
        <li>
          лицензия имеет ограниченный срок действия на бесплатных условиях;
        </li>
        <li>ценность создаётся вкладом в развитие рынка, а не монополией;</li>
        <li>партнёр фиксируется за конкретным направлением или регионом.</li>
      </ul>
    </section>

    <div class="w-full border-t border-gray-200 my-6"></div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">📌 Итог</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Core Team формирует стратегию и удерживает качество продукта.</li>
        <li>
          Внешние партнёры расширяют присутствие на рынках и создают первые
          кейсы внедрения.
        </li>
      </ul>
    </section>
  </div>
</div>

<script lang="ts">
  import { WebsiteName } from "../../../config"
</script>

<svelte:head>
  <title>Governance (Stellar Multisig) — {WebsiteName}</title>
  <meta
    name="description"
    content="Governance StopFires.org в Stellar: мультиподпись 4 участников, порог 3, лидер с весом 2."
  />
  <meta
    name="og:title"
    content="Governance (Stellar Multisig) — {WebsiteName}"
  />
  <meta
    name="og:description"
    content="Управление через мультисиг: 4 участника, threshold 3, лидер вес 2; правила транзакций и смены лидера."
  />
  <meta name="og:type" content="article" />
  <meta name="robots" content="index,follow" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
  <div class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        📜 Governance StopFires.org
      </h1>
      <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
    </div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">🎯 Принцип</h2>
      <p class="text-gray-700 mb-4">
        Управление проектом закрепляется в блокчейне Stellar через мультиподпись
        (multisig). Цель — совместный контроль за средствами и действиями
        проекта при сохранении лидерской динамики.
      </p>
    </section>

    <div class="w-full border-t border-gray-200 my-6"></div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        ⚡ Конфигурация аккаунта
      </h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Количество участников: 4</li>
        <li>Порог подписи (threshold): 3</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">Вес участников</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Лидер проекта: вес = 2</li>
        <li>Остальные участники (3 чел.): вес = 1 каждый</li>
      </ul>
    </section>

    <div class="w-full border-t border-gray-200 my-6"></div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        🔑 Правила принятия решений
      </h2>
      <ol class="list-decimal list-inside text-gray-700 space-y-4">
        <li>
          <p class="text-gray-900 font-medium mb-2">
            Обычные транзакции (платежи, операции):
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>требуется лидер (2) + ещё один участник (1) = 3</li>
            <li>альтернативно: любые трое участников без лидера (1+1+1 = 3)</li>
          </ul>
        </li>
        <li>
          <p class="text-gray-900 font-medium mb-2">
            Смена лидера (governance reset):
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>если трое участников объединяются (1+1+1 = 3),</li>
            <li>они могут изменить веса подписей аккаунта,</li>
            <li>
              тем самым переназначить лидера или перераспределить полномочия
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        🪙 Justification: почему Stellar
      </h2>
      <ol class="list-decimal list-inside text-gray-700 space-y-4">
        <li>
          <p class="text-gray-900 font-medium mb-2">Неизменяемость данных</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Все транзакции фиксируются в блокчейне и не могут быть удалены или
              переписаны.
            </li>
            <li>
              Это исключает «ручное управление» и делает governance прозрачным.
            </li>
          </ul>
        </li>
        <li>
          <p class="text-gray-900 font-medium mb-2">Встроенный мультисиг</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Stellar нативно поддерживает конфигурацию весов и threshold без
              смарт-контрактов.
            </li>
            <li>Простая и проверенная модель безопасности.</li>
          </ul>
        </li>
        <li>
          <p class="text-gray-900 font-medium mb-2">Прозрачность и доверие</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Все решения видны на блокчейне, любой участник может проверить
              историю операций.
            </li>
            <li>
              Устойчивость к злоупотреблениям и приватным «договорённостям».
            </li>
          </ul>
        </li>
        <li>
          <p class="text-gray-900 font-medium mb-2">
            Минимальные комиссии и высокая скорость
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Транзакции стоят доли цента и подтверждаются за несколько секунд.
            </li>
            <li>Это делает управление практичным и дешёвым.</li>
          </ul>
        </li>
      </ol>
    </section>

    <div class="w-full border-t border-gray-200 my-6"></div>

    <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">📌 Итог</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Лидер сохраняет оперативность — может проводить транзакции вместе хотя
          бы с одним участником.
        </li>
        <li>
          Участники сохраняют коллективный контроль — при согласии трёх можно
          сменить лидера или конфигурацию прав.
        </li>
        <li>
          Схема даёт баланс: скорость принятия решений и защита от
          злоупотреблений.
        </li>
      </ul>
    </section>
  </div>
</div>

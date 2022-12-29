<template>
  <div class="currencies-list container">
    <ErrorBlock v-if="isError">
      <template v-slot:title>
        <h1>Произошла не предвиденная ошибка</h1>
      </template>
      <template v-slot:text>
        <p>Попробуйте зайти попозже</p>
      </template>
    </ErrorBlock>

    <template v-else>
      <div class="currencies-list__header">
        <div class="currencies-list__navigation">
          <div class="currencies-list__navigation-title">Выберите валюту</div>
          <select class="currencies-list__navigation-select" v-model="selected">
            <option v-for="item in valute" :key="item.ID" :value="item.ID">
              {{ item.Name }}
            </option>
          </select>
        </div>

        <div class="currencies-list__filter">
          <label class="currencies-list__filter-title">
            Поиск по имени/коду:
          </label>
          <input
            class="currencies-list__filter-input"
            type="text"
            v-model.trim="searchQuery"
          />
        </div>
      </div>

      <ul
        class="currencies-list__items"
        v-if="valuteMatchingSearchQuery.length"
      >
        <li class="currencies-list__item currencies-list__item_header">
          <span>Валюта</span>
          <span>Код</span>
          <span>Соотношение</span>
          <span>Прогресс</span>
        </li>
        <li
          class="currencies-list__item"
          v-for="item in valuteMatchingSearchQuery"
          :key="item.ID"
        >
          <span class="currencies-list__item-valute">{{ item.Name }}</span>
          <span class="currencies-list__item-code">{{ item.CharCode }}</span>
          <span class="currencies-list__item-from">
            {{ getTextValuteFrom(item) }}
          </span>
          <span class="currencies-list__item-to">
            {{ getTextValuteTo(item) }}
          </span>

          <span
            class="currencies-list__item-status"
            :class="`currencies-list__item-status_${
              item.Increased > 0 ? 'green' : 'red'
            }`"
          >
            {{ Math.abs($filters.rounding(item.Increased, 4)) }}
          </span>
        </li>
      </ul>
      <div class="currencies-list__empty" v-else>
        Подходящих валют нет.<br />
        Попробуйте изменить параметры фильтров.
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useValuteData from "@/components/CurrenciesList/composables/useValuteData";
import useValuteSearch from "@/components/CurrenciesList/composables/useValuteSearch";
import ErrorBlock from "@/components/ErrorBlock/ErrorBlock.vue";

export default defineComponent({
  name: "CurrenciesList",

  components: {
    ErrorBlock,
  },

  setup() {
    const isError = ref(false);

    const showError = () => {
      isError.value = true;
    };

    const {
      selected,
      selectedCurrency,
      valute,
      getTextValuteFrom,
      getTextValuteTo,
    } = useValuteData(showError);
    const { searchQuery, valuteMatchingSearchQuery } = useValuteSearch();

    return {
      isError,
      valute,
      selectedCurrency,
      selected,
      searchQuery,
      valuteMatchingSearchQuery,
      getTextValuteFrom,
      getTextValuteTo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "CurrenciesList";
</style>

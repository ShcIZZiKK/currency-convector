<template>
  <div class="converter container">
    <ErrorBlock v-if="isError">
      <template v-slot:title>
        <h1>Произошла не предвиденная ошибка</h1>
      </template>
      <template v-slot:text>
        <p>Попробуйте зайти попозже</p>
      </template>
    </ErrorBlock>

    <div v-else class="converter__wrapper">
      <div class="converter__column">
        <div class="converter__label">Выберите валюту</div>
        <select class="converter__select" v-model="selectedLeft">
          <option v-for="item in allValute" :key="item.ID" :value="item.ID">
            {{ item.Name }}
          </option>
        </select>

        <div class="converter__input-box">
          <input
            class="converter__input-box-input"
            v-model="inputValuteFrom"
            maxlength="12"
          />
          <div class="converter__input-box-rate" v-if="textValuteFrom">
            {{ textValuteFrom }}
          </div>
        </div>
      </div>

      <div class="converter__column converter__column_position-middle">
        <button class="converter__flip" @click="swapValute">
          <ArrowIcon />
        </button>
      </div>

      <div class="converter__column">
        <div class="converter__label">Выберите валюту</div>
        <select class="converter__select" v-model="selectedRight">
          <option v-for="item in allValute" :key="item.ID" :value="item.ID">
            {{ item.Name }}
          </option>
        </select>

        <div class="converter__input-box">
          <input
            class="converter__input-box-input"
            v-model="inputValuteTo"
            disabled
          />
          <div class="converter__input-box-rate" v-if="textValuteTo">
            {{ textValuteTo }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useConverterInputs from "@/components/ConverterView/composables/useConverterInputs";
import useConverterSelectors from "@/components/ConverterView/composables/useConverterSelectors";
import useConverterValute from "@/components/ConverterView/composables/useConverterValute";
import ArrowIcon from "@/components/Icons/ArrowIcon.vue";
import ErrorBlock from "@/components/ErrorBlock/ErrorBlock.vue";

export default defineComponent({
  name: "ConverterView",

  components: {
    ArrowIcon,
    ErrorBlock,
  },

  setup() {
    const isError = ref(false);

    const showError = () => {
      isError.value = true;
    };

    const { allValute } = useConverterValute(showError);
    const { convertValute, selectedLeft, selectedRight, swapValute } =
      useConverterSelectors();
    const { textValuteFrom, textValuteTo, inputValuteFrom, inputValuteTo } =
      useConverterInputs();

    return {
      isError,
      allValute,
      convertValute,
      textValuteFrom,
      textValuteTo,
      inputValuteFrom,
      inputValuteTo,
      selectedLeft,
      selectedRight,
      swapValute,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "ConverterView";
</style>

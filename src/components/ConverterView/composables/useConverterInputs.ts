import { computed, onMounted, ref, watch } from "vue";
import { useConverterStore } from "@/stores";
import filters from "@/helpers/filters";

export default function useConverterInputs() {
  const converterStore = useConverterStore();
  const convertValute = computed(() => {
    return converterStore.getConvertValute;
  });
  const inputValuteFrom = ref(0);
  const inputValuteTo = ref(0);
  const textValuteFrom = computed(() => {
    if (convertValute.value?.from && convertValute.value?.to) {
      const textValuteStart = `1 ${convertValute.value.from.CharCode}`;
      const numberValuteEnd = filters.rounding(
        convertValute.value.to.CurrencyRateTo,
        4
      );
      const textValuteEnd = `${numberValuteEnd} ${convertValute.value.to.CharCode}`;

      return `${textValuteStart} = ${textValuteEnd}`;
    }

    return "";
  });
  const textValuteTo = computed(() => {
    if (convertValute.value?.from && convertValute.value?.to) {
      const textValuteStart = `1 ${convertValute.value.to.CharCode}`;
      const numberValuteEnd = filters.rounding(
        convertValute.value.from.CurrencyRateTo,
        4
      );
      const textValuteEnd = `${numberValuteEnd} ${convertValute.value.from.CharCode}`;

      return `${textValuteStart} = ${textValuteEnd}`;
    }

    return "";
  });

  const updateValues = (value: number) => {
    const multiplier = convertValute.value?.to?.CurrencyRateTo || 1;

    inputValuteTo.value = filters.rounding(value * multiplier, 4);
  };

  watch(convertValute, (newValue) => {
    if (newValue) {
      updateValues(inputValuteFrom.value);
    }
  });

  watch(inputValuteFrom, (newValue) => {
    updateValues(newValue);
  });

  onMounted(() => {
    inputValuteFrom.value = 1;
  });

  return {
    textValuteFrom,
    textValuteTo,
    inputValuteFrom,
    inputValuteTo,
  };
}

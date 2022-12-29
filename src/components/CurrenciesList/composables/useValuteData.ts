import { computed, onMounted } from "vue";
import { useValuteStore } from "@/stores";
import filters from "@/helpers/filters";
import { ValuteRatio } from "@/interfaces/currenciesList";

export default function useValuteData(errorCallback: () => void) {
  const valuteStore = useValuteStore();
  const valute = computed(() => {
    return valuteStore.getValute;
  });

  const selectedCurrency = computed(() => {
    return valuteStore.getSelectedCurrency;
  });

  const selected = computed({
    get() {
      return selectedCurrency.value?.ID || "";
    },
    set(value: string) {
      valuteStore.setSelectedValute(value);
    },
  });

  const setDefaultValuteID = () => {
    // устанавливаем первую валюту из списка по дефолту
    valuteStore.setSelectedValute(valute.value[0]?.ID || "R01235");
  };

  const getTextValuteFrom = (item: ValuteRatio): string => {
    if (selectedCurrency.value) {
      const numberValute = filters.rounding(item.CurrencyRateFrom, 4);

      return `1 ${item.CharCode} - ${numberValute} ${selectedCurrency.value.CharCode}`;
    }

    return "";
  };

  const getTextValuteTo = (item: ValuteRatio): string => {
    if (selectedCurrency.value) {
      const numberValute = filters.rounding(item.CurrencyRateTo, 4);

      return `1 ${selectedCurrency.value.CharCode} - ${numberValute} ${item.CharCode}`;
    }

    return "";
  };

  onMounted(async () => {
    if (!valute.value.length) {
      try {
        await valuteStore.fetchValute();

        setDefaultValuteID();
      } catch (error) {
        errorCallback();
        console.error(error);
      }
    } else {
      setDefaultValuteID();
    }
  });

  return {
    valute,
    selectedCurrency,
    selected,
    getTextValuteFrom,
    getTextValuteTo,
  };
}

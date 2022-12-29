import { computed, onMounted } from "vue";
import { useValuteStore, useConverterStore } from "@/stores";

export default function useConverterValute(errorCallback: () => void) {
  const valuteStore = useValuteStore();
  const converterStore = useConverterStore();

  const allValute = computed(() => {
    return valuteStore.getValute;
  });

  const setDefaultValuteID = () => {
    // устанавливаем первые валюты из списка по дефолту
    converterStore.changeSelectedLeftValute(allValute.value[0]?.ID || "R01235");
    converterStore.changeSelectedRightValute(
      allValute.value[1]?.ID || "R01239"
    );
  };

  onMounted(async () => {
    if (!allValute.value.length) {
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
    allValute,
  };
}

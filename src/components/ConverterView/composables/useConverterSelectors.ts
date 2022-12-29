import { computed } from "vue";
import { useConverterStore } from "@/stores";

export default function useConverterSelectors() {
  const converterStore = useConverterStore();

  const convertValute = computed(() => {
    return converterStore.getConvertValute;
  });

  const selectedLeft = computed({
    get() {
      return converterStore.getSelected.from;
    },
    set(value: string) {
      converterStore.changeSelectedLeftValute(value);
    },
  });

  const selectedRight = computed({
    get() {
      return converterStore.getSelected.to;
    },
    set(value: string) {
      converterStore.changeSelectedRightValute(value);
    },
  });

  const swapValute = () => {
    converterStore.swapValute();
  };

  return {
    convertValute,
    selectedLeft,
    selectedRight,
    swapValute,
  };
}

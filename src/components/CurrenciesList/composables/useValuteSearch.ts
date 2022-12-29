import { ref, computed } from "vue";
import { ValuteRatio } from "@/interfaces/currenciesList";
import { useValuteStore } from "@/stores";

export default function useValuteSearch() {
  const searchQuery = ref("");
  const valuteStore = useValuteStore();
  const valuteList = computed(() => {
    return valuteStore.getCalculatedValute;
  });

  const valuteMatchingSearchQuery = computed(() => {
    return valuteList.value.filter((valute: ValuteRatio) => {
      const value = searchQuery.value.trim().toLowerCase();
      const name = valute.Name.trim().toLowerCase();
      const code = valute.CharCode.trim().toLowerCase();

      return name.includes(value) || code.includes(value);
    });
  });

  return {
    searchQuery,
    valuteMatchingSearchQuery,
  };
}

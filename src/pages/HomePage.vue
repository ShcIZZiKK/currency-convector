<template>
  <div>
    <CurrenciesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrenciesList from "@/components/CurrenciesList/CurrenciesList.vue";

export default defineComponent({
  name: "HomePage",

  components: {
    CurrenciesList,
  },
});
</script>

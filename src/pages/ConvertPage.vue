<template>
  <div>
    <ConverterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConverterView from "@/components/ConverterView/ConverterView.vue";

export default defineComponent({
  name: "ConvertPage",

  components: {
    ConverterView,
  },
});
</script>

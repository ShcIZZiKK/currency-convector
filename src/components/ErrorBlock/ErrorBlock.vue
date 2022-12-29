<template>
  <div class="error-block">
    <slot name="title"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorBlock",
});
</script>

<style lang="scss" scoped>
@import "ErrorBlock";
</style>

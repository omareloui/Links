<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), {
  tag: "div",
});
</script>

<template>
  <component :is="tag" class="container">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.container {
  --container-width: calc(var(--screen-desktop) * 1.5);
  --container-padding: 20px;

  max-width: var(--container-width);
  padding-inline: var(--container-padding);

  margin-left: auto;
  margin-right: auto;

  position: relative;

  @media screen and (max-width: calc(var(--container-padding) * 2 + var(--container-width))) {
    max-width: 100%;
  }
}
</style>

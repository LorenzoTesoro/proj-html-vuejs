<script>
export default {
  name: "ButtonItem",
};
</script>

<template>
  <button class="btn rounded-pill text-uppercase">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables" as *;

button {
  font-weight: 700;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background: $primary;
  color: $lighter;
}
</style>

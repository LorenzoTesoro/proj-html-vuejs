<script>
export default {
  name: "CardItem",
};
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
.card {
  padding: 2rem 1.5rem 2rem 1.5rem;
  text-align: center;
  box-shadow: 2px 25px 15px -2px $light_hash;
}
</style>

<script>
import ButtonItem from "./ButtonItem.vue";
import nav_items from "../../assets/data/nav_items.js";

export default {
  name: "NavBar",
  data() {
    return {
      nav_items,
    };
  },
  components: {
    ButtonItem,
  },
};
</script>

<template>
  <div class="d-flex justify-content-between">
    <img src="/images/avada-drivers-logo-1x.png" alt="" />
    <nav class="navbar navbar-expand-sm">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item text-uppercase" v-for="link in nav_items">
          <a href="">{{ link.name }}</a>
        </li>
        <div class="corner rounded text-uppercase px-2">new</div>
      </ul>
      <ButtonItem class="ms-4">book now</ButtonItem>
    </nav>
  </div>
</template>

<script>
import NavBar from "../utilities/NavBar.vue";

export default {
  name: "AppHeader",
  components: {
    NavBar,
  },
};
</script>

<template>
  <header>
    <div class="header_top">
      <div class="container">
        <div class="row">
          <div class="col">
            <div>We have a 95% Successful Pass Rate!</div>
          </div>
          <!-- top_left -->
          <div class="col d-flex align-items-center justify-content-end">
            <font-awesome-icon icon="fa-solid fa-phone" class="phone" />
            <div class="ps-3">
              Give us a call to book your tuition! 1-800-555-555
            </div>
          </div>
          <!-- top_right -->
        </div>
      </div>
    </div>
    <!-- /.header_top -->
    <div class="header_bottom">
      <div class="container">
        <div class="row">
          <NavBar />
          <!-- ./navbar -->
        </div>
      </div>
    </div>
    <!-- /.header_bottom -->
  </header>
</template>

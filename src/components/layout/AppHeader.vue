<script>
import NavBar from "../NavBar.vue";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
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
          <div class="col">
            <div class="logo">
              <img
                src="../../assets/images/avada-drivers-logo-2x-400x77.png"
                alt=""
              />
            </div>
          </div>
          <div class="col">
            <NavBar />
            <!-- ./navbar -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.header_bottom -->
  </header>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<template>
  <section class="jumbotron">
    <div class="container d-flex position-relative">
      <h1>Drive with Avada</h1>
      <p>We offer the finest driving tuition money can buy</p>
      <div class="square cost rounded">
        <div class="price">$ 39</div>
        <div class="on_sale">On Sale</div>
      </div>
      <div class="square demos rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calendar3-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3H0z"
          />
        </svg>
        <div class="on_sale">Demos</div>
      </div>
    </div>
  </section>
</template>

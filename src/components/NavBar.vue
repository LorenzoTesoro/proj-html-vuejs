<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <div class="d-flex justify-content-between">
    <img src="/images/avada-drivers-logo-1x.png" alt="" />
    <nav class="navbar navbar-expand-sm">
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item text-uppercase mx-3">
            <a class="nav-link text-light active" href="#" aria-current="page"
              >Home <span class="visually-hidden">(current)</span></a
            >
          </li>
          <li class="nav-item text-uppercase mx-3">
            <a class="nav-link text-light" href="#">Prices</a>
          </li>
          <li class="nav-item text-uppercase mx-3">
            <a class="nav-link text-light" href="#">Courses</a>
          </li>
          <li class="nav-item text-uppercase mx-3">
            <a class="nav-link text-light" href="#">Locations</a>
          </li>
          <li class="nav-item text-uppercase mx-3">
            <a class="nav-link text-light" href="#">Blog</a>
          </li>
        </ul>
        <button
          class="btn rounded-pill text-uppercase text-light ms-4"
          type="submit"
        >
          Book Now
        </button>
      </div>
    </nav>
  </div>
</template>

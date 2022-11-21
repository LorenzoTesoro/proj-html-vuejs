<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container">
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul
          class="navbar-nav me-auto mt-2 mt-lg-0 d-flex justify-content-space-between"
        >
          <li class="nav-item text-uppercase">
            <a class="nav-link text-light active" href="#" aria-current="page"
              >Home <span class="visually-hidden">(current)</span></a
            >
          </li>
          <li class="nav-item text-uppercase">
            <a class="nav-link text-light" href="#">Prices</a>
          </li>
          <li class="nav-item text-uppercase">
            <a class="nav-link text-light" href="#">Courses</a>
          </li>
          <li class="nav-item text-uppercase">
            <a class="nav-link text-light" href="#">Locations</a>
          </li>
          <li class="nav-item text-uppercase">
            <a class="nav-link text-light" href="#">Blog</a>
          </li>
        </ul>
        <button
          class="btn rounded-pill text-uppercase text-light"
          type="submit"
        >
          Book Now
        </button>
      </div>
    </div>
  </nav>
</template>

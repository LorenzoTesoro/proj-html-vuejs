<script>
import courses from "../../assets/data/courses.js";
import ButtonItem from "../utilities/ButtonItem.vue";
import contacts_icons from "../../assets/data/contacts_icons.js";
import socialIcons from "../../assets/data/social_icons.js";
export default {
  name: "AppFooter",
  data() {
    return {
      courses,
      contacts_icons,
      socialIcons,
    };
  },
  components: {
    ButtonItem,
  },
};
</script>

<template>
  <footer>
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="/images/avada-drivers-logo-1x.png" alt="" class="pb-3" />
            <p>
              Avada Driving School is the right choice for experienced drivers
              looking for a refresher course, or the brand new driver wanting to
              pass first time.
            </p>
          </div>
          <!-- /.col -->
          <div class="col contacts">
            <h6 class="text-uppercase pb-2">contact details</h6>
            <ul>
              <li v-for="icon in contacts_icons">
                <font-awesome-icon :icon="`${icon.icon}`" />
                <span class="ps-3">{{ icon.name }}</span>
              </li>
            </ul>
          </div>
          <!-- /.col -->
          <div class="col courses">
            <h6 class="text-uppercase pb-2">Courses</h6>
            <ul class="">
              <li v-for="course in courses">
                <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
                <a href="" class="ps-3">{{ course.name }}</a>
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
                <a href="" class="ps-3">Automatic</a>
              </li>
            </ul>
          </div>
          <!-- /.col -->
          <div class="col text-center">
            <img src="/images/footer-ad-grid.png" alt="" />
            <ButtonItem class="mt-4"> book now </ButtonItem>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.footer_top -->
    <div class="footer_bottom">
      <div class="container">
        <div class="row">
          <div class="col">
            Copyright 2012-2020 | Avada Theme by <span>ThemeFusion</span> | All
            Rights Reserved | Powered by <span>WordPress</span>
          </div>
          <!-- /.col -->
          <div class="col social_icons">
            <ul>
              <li v-for="icon in socialIcons">
                <font-awesome-icon :icon="`${icon.icon}`" />
              </li>
            </ul>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.footer_bottom -->
  </footer>
</template>

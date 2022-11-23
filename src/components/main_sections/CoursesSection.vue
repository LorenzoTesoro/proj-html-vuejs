<script>
import CardItem from "../utilities/CardItem.vue";
import ButtonItem from "../utilities/ButtonItem.vue";
import courses from "../../assets/data/courses";

export default {
  name: "CoursesSection",
  data() {
    return {
      courses,
    };
  },
  components: {
    CardItem,
    ButtonItem,
  },
};
</script>

<template>
  <section class="courses">
    <div class="container">
      <div class="row">
        <div class="col">
          <CardItem>
            <img class="corner" src="/images/new-corner.jpg" alt="" />
            <h2 class="pb-5">Courses</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              unde laboriosam alias distinctio expedita. Quia necessitatibus
              vitae corporis inventore, quidem, nemo quo dolorum totam quos
              ullam in expedita fuga perspiciatis!
            </p>
            <div class="mt-5">
              <ButtonItem> course information </ButtonItem>
            </div>
          </CardItem>
        </div>
        <!-- /.col -->
        <div class="col courses_features">
          <div v-for="course in courses">
            <img class="mb-3" :src="`${course.image}`" alt="" />
            <h5 class="text-center mb-3">{{ course.name }}</h5>
            <div class="text-center">
              <ButtonItem>Learn More</ButtonItem>
            </div>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.courses -->
</template>

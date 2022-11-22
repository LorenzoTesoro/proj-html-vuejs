<script>
import CardItem from "../utilities/CardItem.vue";
import ButtonItem from "../utilities/ButtonItem.vue";

export default {
  name: "CoursesSection",
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
            <h1 class="pb-5">Courses</h1>
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
        <div class="col">
          <div>
            <img class="mb-3" src="/images/courses-passplus.jpg" alt="" />
            <h5 class="text-center mb-3">Pass Plus</h5>
            <div class="text-center">
              <ButtonItem>Learn More</ButtonItem>
            </div>
          </div>
          <div>
            <img class="mb-3" src="/images/course-intensive.jpg" alt="" />
            <h5 class="text-center mb-3">Intensive Course</h5>
            <div class="text-center">
              <ButtonItem>Learn More</ButtonItem>
            </div>
          </div>
          <div>
            <img class="mb-3" src="/images/courses-instructor.jpg" alt="" />
            <h5 class="text-center mb-3">Instructors</h5>
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

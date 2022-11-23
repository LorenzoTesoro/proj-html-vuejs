<script>
import CardItem from "../utilities/CardItem.vue";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
  name: "StatsSection",
  components: {
    CardItem,
    CircleProgress,
  },
};
</script>

<template>
  <!-- TODO: CREATE DINAMIC CIRCLE,   resolve background issue -->
  <section class="statistics">
    <div class="container">
      <div class="row">
        <div class="col">
          <CardItem>
            <div class="circle">
              <span class="percentage high">%</span>
              <circleProgress
                :percent="95"
                :show-percent="true"
                fill-color="#79b27b"
              />
            </div>
            <div class="title pb-3">
              <h6 class="text-uppercase">pass rate</h6>
            </div>
          </CardItem>
        </div>
        <div class="col">
          <CardItem>
            <div class="circle">
              <span class="percentage max">%</span>
              <circleProgress
                :percent="100"
                :show-percent="true"
                fill-color="#79b27b"
              />
            </div>

            <div class="title pb-3">
              <h6 class="text-uppercase">referral rate</h6>
            </div>
          </CardItem>
        </div>
        <div class="col">
          <CardItem>
            <div class="circle">
              <span class="percentage min">%</span>
              <circleProgress
                :percent="0.2"
                :show-percent="true"
                fill-color="#79b27b"
              />
            </div>
            <div class="title pb-3">
              <h6 class="text-uppercase">Accident rate</h6>
            </div>
          </CardItem>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.statistics -->
</template>

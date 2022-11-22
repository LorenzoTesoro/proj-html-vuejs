<script>
import CardItem from "../utilities/CardItem.vue";

export default {
  name: "StatsSection",
  components: {
    CardItem,
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
            <div class="circle mb-5">
              <div class="number">95%</div>
            </div>
            <div class="title pb-3">
              <h6 class="text-uppercase">pass rate</h6>
            </div>
          </CardItem>
        </div>
        <div class="col">
          <CardItem>
            <div class="circle mb-5">
              <div class="number">95%</div>
            </div>
            <div class="title pb-3">
              <h6 class="text-uppercase">referral rate</h6>
            </div>
          </CardItem>
        </div>
        <div class="col">
          <CardItem>
            <div class="circle mb-5">
              <div class="number">95%</div>
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

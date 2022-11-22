<script>
import CardItem from "../utilities/CardItem.vue";
import ButtonItem from "../utilities/ButtonItem.vue";

export default {
  name: "InstructorsSection",
  components: {
    CardItem,
    ButtonItem,
  },
};
</script>

<template>
  <section class="instructors">
    <div class="container">
      <div class="row py-5">
        <div class="col">
          <h2 class="pb-3">Your Instructors</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            delectus, ratione molestiae eligendi, labore magni inventore
            nesciunt dignissimos tenetur, facere totam! Neque assumenda mollitia
            quae architecto, voluptatum possimus minus quasi!
          </p>
        </div>
        <!-- /.col -->
        <div class="col">
          <ButtonItem>more about us</ButtonItem>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col">
          <CardItem>
            <img
              src="/images/instructor-mikehart.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5>Mike Hart</h5>
              <div>icon</div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
              </p>
            </div>
          </CardItem>
        </div>
        <!-- /.col -->
        <div class="col">
          <CardItem>
            <img
              src="/images/instructor-johnsmith.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5>John Smith</h5>
              <div>icone</div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
              </p>
            </div>
          </CardItem>
        </div>
        <!-- /.col -->
        <div class="col">
          <CardItem>
            <img
              src="/images/instructor-angelahart.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5>Angela Hart</h5>
              <div>icone</div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
              </p>
            </div>
          </CardItem>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.instructors -->
</template>

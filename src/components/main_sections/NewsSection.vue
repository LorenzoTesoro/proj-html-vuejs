<script>
import CardItem from "../utilities/CardItem.vue";
import ButtonItem from "../utilities/ButtonItem.vue";

export default {
  name: "NewsSection",
  components: {
    CardItem,
    ButtonItem,
  },
};
</script>

<template>
  <section class="news">
    <div class="container">
      <CardItem>
        <h2 class="pb-5">Latest News</h2>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src="/images/blog-choosecar-700x441.jpg" alt="" />
              <div>
                <h5 class="pt-3">What Car to Start With?</h5>
                <div class="caption pb-3">
                  February 7th, 2019 | <span class="comments">0 Comments</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <!-- /.col -->
            <div class="col">
              <img src="/images/blogpost-10and2-700x441.jpg" alt="" />
              <div>
                <h5 class="pt-3">Avada Driving School Expanding</h5>
                <div class="caption pb-3">
                  February 7th, 2019 | <span class="comments">0 Comments</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
          <div>
            <ButtonItem class="text-light mt-2">more from the blog</ButtonItem>
          </div>
        </div>
        <!-- /.container -->
      </CardItem>
      <img src="/images/latestnews-bottom.png" alt="" class="triangle" />
    </div>
    <!-- /.container -->
  </section>
  <!-- /.news -->
</template>

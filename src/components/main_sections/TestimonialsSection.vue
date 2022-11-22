<script>
export default {
  name: "TestimonialsSection",
};
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2>Testimonials</h2>
          <p>Here's what our happy drivers had to say about our services:</p>
          <img src="/images/testimonial-sophia.png" alt="" class="my-3" />
          <div class="container testimonial_review">
            <p>
              Avada Driving School really helped build my confidence behind the
              wheel and driving in general, and they got me a first time pass!
              Highly recommended.
            </p>
            <h5 class="py-3">Sophia Jones</h5>
            <div class="container">
              <div class="circle active"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.testimonials -->
</template>

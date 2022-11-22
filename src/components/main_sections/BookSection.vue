<script>
export default {
  name: "BookSection",
};
</script>

<!-- TODO: ADD ICON TO NAME INPUT -->
<template>
  <section class="book_lesson pb-3">
    <div class="container">
      <div class="row">
        <div class="col title">
          <h2>Get Behind The Wheel</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            hic nostrum error sunt officia doloribus provident vel harum dolore
            qui. Sunt natus corporis ab laborum quibusdam omnis expedita at
            vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis
            delectus recusandae ad incidunt odit, excepturi beatae tenetur earum
            eligendi odio, ea omnis pariatur tempore veniam officiis aliquid
            iusto? Perferendis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Asperiores labore dicta vitae excepturi,
            recusandae odio est corrupti dolore officiis delectus eaque
            repellendus, neque placeat inventore quo perferendis, odit quibusdam
            aspernatur.
          </p>
        </div>
        <!--/.title -->
        <div class="col contact_us">
          <div class="card text-center">
            <h3>First Lesson Free!</h3>
            <div class="px-5 mb-3">
              <p>
                When you make a block booking with us first lesson is included
                free.
              </p>
            </div>
            <input
              class="position-relative"
              type="text"
              placeholder="Your Name*"
            />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Telephone" />
            <input type="text" placeholder="Location" />
            <div class="request">
              <button class="btn rounded-pill text-uppercase">
                Request a callback
              </button>
            </div>
          </div>
        </div>
        <!-- /.col -->
      </div>
    </div>
  </section>
</template>

<script>
import contacts_icons from "../../assets/data/contacts_icons.js";
export default {
  name: "CtaSection",
  data() {
    return {
      contacts_icons,
    };
  },
};
</script>

<template>
  <section class="cta">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Start Learning to Drive Today</h2>
          <p>Give us a call to schedule your first driving lesson</p>
        </div>
        <!-- /. title -->
        <div class="col">
          <font-awesome-icon icon="fa-solid fa-phone" class="phone me-2" />
          {{ contacts_icons[1].name }}
        </div>
        <!-- ./cta -->
      </div>
    </div>
  </section>
</template>

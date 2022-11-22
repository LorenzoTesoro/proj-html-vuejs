<script>
import ButtonItem from "../utilities/ButtonItem.vue";

export default {
  name: "NewsletterSection",
  components: {
    ButtonItem,
  },
};
</script>

<template>
  <section class="newsletter">
    <div class="container text-center">
      <h2 class="py-4">Sign up to our Newsletter</h2>
      <input type="text" class="mt-3 mb-4 py-2 rounded" />
      <ButtonItem>subscribe</ButtonItem>
      <p class="pt-5">
        (We do not share your data with anybody, and only use it for its
        intended purpose)
      </p>
    </div>
    <!-- /.container -->
  </section>
  <!-- /.newsletter -->
</template>

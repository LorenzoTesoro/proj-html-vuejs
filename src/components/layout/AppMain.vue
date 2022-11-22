<script>
import HeroSection from "../main_sections/HeroSection.vue";
import BookSection from "../main_sections/BookSection.vue";
import CtaSection from "../main_sections/CtaSection.vue";
import CoursesSection from "../main_sections/CoursesSection.vue";

export default {
  name: "AppMain",
  components: {
    HeroSection,
    BookSection,
    CtaSection,
    CoursesSection,
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <BookSection />
    <CtaSection />
    <CoursesSection />
  </main>
</template>

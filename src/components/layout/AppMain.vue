<script>
import HeroSection from "../main_sections/HeroSection.vue";
import BookSection from "../main_sections/BookSection.vue";
import CtaSection from "../main_sections/CtaSection.vue";
import CoursesSection from "../main_sections/CoursesSection.vue";
import StatsSection from "../main_sections/StatsSection.vue";
import CardItem from "../utilities/CardItem.vue";

export default {
  name: "AppMain",
  components: {
    HeroSection,
    BookSection,
    CtaSection,
    CoursesSection,
    StatsSection,
    CardItem,
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <BookSection />
    <CtaSection />
    <CoursesSection />
    <StatsSection />
  </main>
</template>

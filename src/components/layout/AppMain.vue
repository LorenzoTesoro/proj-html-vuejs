<script>
import HeroSection from "../main_sections/HeroSection.vue";
import BookSection from "../main_sections/BookSection.vue";
import CtaSection from "../main_sections/CtaSection.vue";
import CoursesSection from "../main_sections/CoursesSection.vue";
import StatsSection from "../main_sections/StatsSection.vue";
import InstructorsSection from "../main_sections/InstructorsSection.vue";
import TestimonialsSection from "../main_sections/TestimonialsSection.vue";
import NewsSection from "../main_sections/NewsSection.vue";
import NewsletterSection from "../main_sections/NewsletterSection.vue";

export default {
  name: "AppMain",
  components: {
    HeroSection,
    BookSection,
    CtaSection,
    CoursesSection,
    StatsSection,
    InstructorsSection,
    TestimonialsSection,
    NewsSection,
    NewsletterSection,
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
    <InstructorsSection />
    <TestimonialsSection />
    <NewsSection />
    <NewsletterSection />
  </main>
</template>

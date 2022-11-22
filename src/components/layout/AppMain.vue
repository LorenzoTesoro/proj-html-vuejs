<script>
import HeroSection from "../main_sections/HeroSection.vue";
import BookSection from "../main_sections/BookSection.vue";
import CtaSection from "../main_sections/CtaSection.vue";
import CoursesSection from "../main_sections/CoursesSection.vue";
import StatsSection from "../main_sections/StatsSection.vue";
import InstructorsSection from "../main_sections/InstructorsSection.vue";

import CardItem from "../utilities/CardItem.vue";
import ButtonItem from "../utilities/ButtonItem.vue";

export default {
  name: "AppMain",
  components: {
    HeroSection,
    BookSection,
    CtaSection,
    CoursesSection,
    StatsSection,
    InstructorsSection,
    CardItem,
    ButtonItem,
  },
};
</script>

<!-- TODO: RESOLVE HOVER EFFECTS ON BUTTONS -->
<!-- INSTALL FONTAWESOME AND GENERATE ICONS -->

<template>
  <main>
    <HeroSection />
    <BookSection />
    <CtaSection />
    <CoursesSection />
    <StatsSection />
    <InstructorsSection />
  </main>
</template>

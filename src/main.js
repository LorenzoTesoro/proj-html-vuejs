import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouseChimney,
  faPhone,
  faEnvelope,
  faLink,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
  faHouseChimney,
  faPhone,
  faEnvelope,
  faLink,
  faCircleArrowRight
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

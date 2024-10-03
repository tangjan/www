// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import "./custom.css";
import "./styles/icons.css";
import MyLayout from "./components/MyLayout.vue";

export default {
  extends: Theme,

  Layout: MyLayout,

  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   });
  // },
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
};

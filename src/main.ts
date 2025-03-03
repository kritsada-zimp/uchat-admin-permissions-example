import { createApp } from "vue";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";
import router from "./router/index";

import { Can, abilitiesPlugin } from "@casl/vue";
import defineAbilityFor from "./permission/abilities";

const user = { role: "admin" };
const ability = defineAbilityFor(user);

const myApp = createApp(App);
myApp
  .use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  })
  .component(Can.name!, Can);
myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");

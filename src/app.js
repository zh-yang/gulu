import Vue from "vue";
import Button from "./button";
import ButtonGroup from "./button-group"
import Icon from "./icon";

Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-icon", Icon);

new Vue({
    el: "#app",
    data: {
        message: "hi"
    }
})
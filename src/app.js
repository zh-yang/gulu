import Vue from "vue";
import Button from "./button";
import ButtonGroup from "./button-group"
import Icon from "./icon";
import Input from "./input";
import Row from "./row";
import Col from "./col";

Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-icon", Icon);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);

new Vue({
    el: "#app",
    data: {
        message: "hi"
    },
    methods: {
        inputChange(e){
            console.log(e, 1);
        }
    }
})

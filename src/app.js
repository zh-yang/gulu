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

// test
import chai from "chai";
{
    const expect = chai.expect;

    const GButton = Vue.options.components["g-button"];
    const gButton = new GButton({
        propsData: {
            icon: "icon_telephone"
        }
    });
    gButton.$mount();
    const useElement = gButton.$el.querySelector("use");
    const href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#icon-erp-cross-icon_telephone");
}
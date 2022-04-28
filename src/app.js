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
import spies from "chai-spies";
chai.use(spies);

const expect = chai.expect;
const GButton = Vue.options.components["g-button"];
{
    const gButton = new GButton({
        propsData: {
            icon: "icon_telephone"
        }
    });
    gButton.$mount();
    const useElement = gButton.$el.querySelector("use");
    const href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#icon-erp-cross-icon_telephone");
    gButton.$el.remove();
    gButton.$destroy();
}
{
    const gButton = new GButton({
        propsData: {
            icon: "icon_telephone",
            loading: true
        }
    });
    gButton.$mount();
    const useElement = gButton.$el.querySelector("use");
    const href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#icon-erp-cross-icon_syn_gray_16");
    gButton.$el.remove();
    gButton.$destroy();
}
{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const gButton = new GButton({
        propsData: {
            icon: "icon_telephone",
        }
    });
    gButton.$mount(div);
    const useElement = gButton.$el.querySelector("svg");
    const style = getComputedStyle(useElement);
    expect(style.order).to.equal("1");
    gButton.$el.remove();
    gButton.$destroy();
}
{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const gButton = new GButton({
        propsData: {
            icon: "icon_telephone",
            iconPosition: "right"
        }
    });
    gButton.$mount(div);
    const useElement = gButton.$el.querySelector("svg");
    const style = getComputedStyle(useElement);
    expect(style.order).to.equal("2");
    gButton.$el.remove();
    gButton.$destroy();
}
{
    const gButton = new GButton();
    gButton.$mount();
    const spy = chai.spy(function(){})
    gButton.$on("click", spy);
    const button = gButton.$el;
    button.click();
    expect(spy).to.have.been.called();
    gButton.$el.remove();
    gButton.$destroy();
}
import { expect } from "chai";
import Vue from "vue";
import Button from "../src/button";

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Button Test", ()=>{
    it("存在.", ()=>{
        expect(Button).to.exist;
    })
})
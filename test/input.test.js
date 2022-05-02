import { expect } from "chai";
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false
Vue.config.devtools = false

const Ctr = Vue.extend(Input);

describe("Input Test", ()=>{
    it("存在.", ()=>{
        expect(Input).to.exist;
    })

    describe("props", ()=>{
        let vm;
        afterEach(()=>{
            vm.$destroy();
            vm.$el.remove();
        })
        it("接受 value", ()=>{
            vm = new Ctr({
                propsData: {
                    value: "12"
                }
            }).$mount();
            const inputEl = vm.$el.querySelector("input");
            expect(inputEl.value).to.eq("12");
        })
    
        it("接受 disabled", ()=>{
            vm = new Ctr({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputEl = vm.$el.querySelector("input");
            expect(inputEl.disabled).to.eq(true);
        })
    
        it("接受 readonly", ()=>{
            vm = new Ctr({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputEl = vm.$el.querySelector("input");
            expect(inputEl.readOnly).to.eq(true);
        })
    
        it("接受 error", ()=>{
            vm = new Ctr({
                propsData: {
                    error: "please input"
                }
            }).$mount();
            const useEl = vm.$el.querySelector("use");
            const errorEl = vm.$el.querySelector(".error-message");
            expect(useEl.getAttribute("xlink:href")).to.eq("#icon-erp-cross-icon_anomaly_red_16");
            expect(errorEl.innerText).to.eq("please input");
        })
    })

    describe("events", ()=>{
        let vm;
        afterEach(()=>{
            vm.$destroy();
            vm.$el.remove();
        })
        
        it("支持 change 事件", ()=>{
            vm = new Ctr({}).$mount;
            
        })
    })
})
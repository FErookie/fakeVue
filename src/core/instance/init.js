"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = require("./render");
var state_1 = require("./state");
var uid = 0;
function initInternalComponent(vm, options) {
}
function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        var vm = this;
        vm._isVue = true;
        vm._uid = uid++;
        if (options && options._isComponent) {
            initInternalComponent(vm, options);
        }
        else {
            vm.$options = options;
        }
        vm._renderProxy = vm;
        render_1.default(vm);
        state_1.default(vm);
        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    };
}
exports.initMixin = initMixin;
//# sourceMappingURL=init.js.map
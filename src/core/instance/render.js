"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom_1 = require("snabbdom");
function initRender(vm) {
}
exports.default = initRender;
function renderMixin(Vue) {
    Vue.prototype._render = function () {
        var vm = this;
        var _a = vm.$options, render = _a.render, _parentVnode = _a._parentVnode;
        vm.$vnode = _parentVnode;
        var vnode = render.call(vm, snabbdom_1.h);
        vnode.parent = _parentVnode;
        return vnode;
    };
}
exports.renderMixin = renderMixin;
//# sourceMappingURL=render.js.map
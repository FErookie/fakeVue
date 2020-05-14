"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
function initData(vm) {
    var data = vm.$options.data;
    if (typeof data === 'function') {
        data = data.call(vm, vm);
    }
    vm.$data = data;
    Object.keys(data).forEach(function (key) {
        Object.defineProperty(vm, key, {
            configurable: true,
            enumerable: true,
            get: function () {
                if (util_1.default(key, vm)) {
                    return vm.$data[key];
                }
            },
            set: function (v) {
                if (util_1.default(key, vm)) {
                    vm.$data[key] = v;
                }
            }
        });
    });
}
function initState(vm) {
    var opts = vm.$options;
    if (opts.data) {
        initData(vm);
    }
}
exports.default = initState;
//# sourceMappingURL=state.js.map
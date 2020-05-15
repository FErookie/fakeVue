"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("./init");
var Vue = (function () {
    function Vue(options) {
        this.$data = {};
        this._init(options);
    }
    Vue.prototype._init = function (options) {
    };
    return Vue;
}());
init_1.initMixin(Vue);
exports.default = Vue;
//# sourceMappingURL=index.js.map
var _a = require('snabbdom'), h = _a.h, init = _a.init;
var patch = init([
    require('snabbdom/modules/class').default,
    require('snabbdom/modules/props').default,
    require('snabbdom/modules/style').default,
    require('snabbdom/modules/eventlisteners').default,
]);
var Vue = (function () {
    function Vue(options) {
        this.initData(options.data);
        if (options.el) {
            this.$mount(options.el);
        }
    }
    Vue.prototype.initData = function (data) {
        var _this = this;
        this.$data = data;
        Object.keys(data).forEach(function (key) {
            Object.defineProperty(_this, key, {
                enumerable: true,
                configurable: true,
                get: function () {
                    return this.$data[key];
                },
                set: function (v) {
                    this.$data[key] = v;
                }
            });
        });
    };
    Vue.prototype.$mount = function (el) {
        this.$el = document.getElementById(el);
        var vnode = h('button', { on: {
                click: function () {
                    console.log("2020-5-13第一步");
                }
            }
        }, "Hello World");
        patch(this.$el, vnode);
    };
    Vue.prototype.$watch = function () {
    };
    return Vue;
}());
var vm = new Vue({
    el: "app",
    data: {
        'a': 1
    }
});
//# sourceMappingURL=index.js.map
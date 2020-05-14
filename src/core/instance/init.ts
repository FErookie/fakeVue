import Vue from './index'
import initRender from './render'
import initState from './state'
export default interface options{
    _isComponent? : boolean,
    data? : object
}
let uid = 0;

function initInternalComponent(vm: Vue, options: options) {

}


export function initMixin(Vue: Vue) {
    Vue._init = function (options: options) {
        const vm = this;
        vm._isVue = true;
        vm._uid = uid++;

        if (options && options._isComponent) {
            initInternalComponent(vm, options);
        } else {
            vm.$options = options;
        }

        vm._renderProxy = vm;
        initRender(vm);
        initState(vm);

        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    }
}

import initRender from './render'
import initState from './state'
import { VNode } from 'snabbdom'
export default interface options{
    $options?: {
        data?: object
    };
    _isComponent?: boolean,
    data?: object;
    $data:  {[index: string]:any};
}
export interface VueInterface{
    prototype: any;
}
let uid = 0;

function initInternalComponent(vm: VueInterface, options: options) {

}


export function initMixin(Vue: VueInterface) {
    Vue.prototype._init = function (options: options) {
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

import Vue from "./index";
import isValidKey from "../util";

function initData(vm: Vue) {
    let data = vm.$options.data;
    if(typeof data === 'function'){
        data = data.call(vm, vm);
    }
    vm.$data = data;
    Object.keys(data).forEach(key => {
        Object.defineProperty(vm, key, {
            configurable: true,
            enumerable: true,
            get(): any {
                if(isValidKey(key, vm)) {
                    return vm.$data[key];
                }
            },
            set(v: any) {
                if(isValidKey(key, vm)) {
                    vm.$data[key] = v;
                }
            }
        })
    })
}

export default function initState(vm: Vue) {
    const opts = vm.$options;
    if (opts.data) {
        initData(vm);
    }
}

import VueInterface from './init'
import isValidKey from "../util";

function initData(vm: VueInterface) {
    let data = vm.$options.data;
    if(typeof data === 'function'){
        data = data.call(vm, vm);
    }
    vm.$data = data;
    //这部只是想把data里的数据都绑到实例上
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

export default function initState(vm: VueInterface) {
    const opts = vm.$options;
    if (opts.data) {
        initData(vm);
    }
}

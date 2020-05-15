//这个因为模板转换成AST再转换成vnode这个部分不知道怎么写暂时先搁置一下

import {h, VNode} from 'snabbdom';
import {VueInterface} from './init';

export default function initRender (vm: VueInterface) {
}

export function renderMixin (Vue: VueInterface): void {
    Vue.prototype._render = function (): VNode {
        const vm = this;
        const { render, _parentVnode } = vm.$options;
        vm.$vnode = _parentVnode;

        let vnode = render.call(vm, h)
        vnode.parent = _parentVnode

        return vnode
    }
}

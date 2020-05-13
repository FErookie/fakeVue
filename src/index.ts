const {h, init} = require('snabbdom');
const patch = init([
    require('snabbdom/modules/class').default, // makes it easy to toggle classes
    require('snabbdom/modules/props').default, // for setting properties on DOM elements
    require('snabbdom/modules/style').default, // handles styling on elements with support for animations
    require('snabbdom/modules/eventlisteners').default, // attaches event listeners
])

interface options {
    el?: string,
    data?: object
}

class Vue{
    private $data: object;
    private $el: HTMLElement;
    constructor(options: options) {
        this.initData(options.data);
        if(options.el) {
            this.$mount(options.el);
        }
    }
    initData(data: object): void{
        //要实现的功能是这个
        //当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
        this.$data = data;
        Object.keys(data).forEach((key) => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get(): any {
                    return this.$data[key];
                },
                set(v: any) {
                    this.$data[key] = v;
                }
            })
        })
    }
    $mount(el: string):void {
        this.$el = document.getElementById(el);
        //生成出v-node 这个要改好久 现在是最初级的版本
        let vnode = h('button', {on:
                {
                    click: () => {
                        console.log("2020-5-13第一步");
                    }
                }
        }, "Hello World");
        patch(this.$el, vnode);
    }
    $watch():void {

    }

}

let vm = new Vue({
    el: "app",
    data: {
        'a': 1
    }
})


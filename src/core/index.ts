import Vue from './instance/index'

let e = new Vue({
    data: {
        a: 1
    }
})

// @ts-ignore
console.log(e.a);


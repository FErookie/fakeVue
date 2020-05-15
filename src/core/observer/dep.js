"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../util/index");
var uid = 0;
var Dep = (function () {
    function Dep() {
        this.id = uid++;
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.removeSub = function (sub) {
        index_1.remove(this.subs, sub);
    };
    Dep.prototype.depend = function () {
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    };
    Dep.prototype.notify = function () {
        var subs = this.subs.slice();
        for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    };
    return Dep;
}());
exports.default = Dep;
Dep.target = null;
var targetStack = [];
function pushTarget(_target) {
    if (Dep.target)
        targetStack.push(Dep.target);
    Dep.target = _target;
}
exports.pushTarget = pushTarget;
function popTarget() {
    Dep.target = targetStack.pop();
}
exports.popTarget = popTarget;
//# sourceMappingURL=dep.js.map
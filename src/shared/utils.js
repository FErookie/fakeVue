"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makemap(str, expectsLowerCase) {
    var map = new Map();
    var list = str.split(',');
    list.forEach(function (value) {
        map.set(value, true);
    });
    return expectsLowerCase
        ? function (val) { return map.get(val.toLowerCase()); }
        : function (val) { return map.get(val); };
}
exports.makemap = makemap;
//# sourceMappingURL=utils.js.map
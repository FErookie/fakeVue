"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var astAttr = (function () {
    function astAttr(n, v) {
        this.name = n;
        this.value = v;
    }
    return astAttr;
}());
exports.astAttr = astAttr;
var ASTElement = (function () {
    function ASTElement(tag, type, staticRoot, isStatic, plain, parent, attrsList, attrsMap, children, expression) {
        this._tag = tag;
        this._type = type;
        this._staticRoot = staticRoot;
        this._isStatic = isStatic;
        this._plain = plain;
        this._parent = parent;
        this._attrsList = attrsList;
        this._attrsMap = attrsMap;
        this._children = children;
        this._expression = expression;
    }
    Object.defineProperty(ASTElement.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "staticRoot", {
        get: function () {
            return this._staticRoot;
        },
        set: function (value) {
            this._staticRoot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "isStatic", {
        get: function () {
            return this._isStatic;
        },
        set: function (value) {
            this._isStatic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "plain", {
        get: function () {
            return this._plain;
        },
        set: function (value) {
            this._plain = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "attrsList", {
        get: function () {
            return this._attrsList;
        },
        set: function (value) {
            this._attrsList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "attrsMap", {
        get: function () {
            return this._attrsMap;
        },
        set: function (value) {
            this._attrsMap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "children", {
        get: function () {
            return this._children;
        },
        set: function (value) {
            this._children = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ASTElement.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: true,
        configurable: true
    });
    return ASTElement;
}());
exports.ASTElement = ASTElement;
//# sourceMappingURL=ASTElement.js.map
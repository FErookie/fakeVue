"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ASTElement_1 = require("./ASTElement");
function createASTElement(tag, attrs, parent) {
    return new ASTElement_1.ASTElement(tag, 1, false, false, false, parent, attrs, {}, [], "");
}
exports.createASTElement = createASTElement;
function parse(template) {
}
exports.parse = parse;
//# sourceMappingURL=index.js.map
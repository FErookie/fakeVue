"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../shared/utils");
exports.isPlainTextElement = utils_1.makemap('script,style,textarea', true);
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var tagRegex = {
    comment: /^<!--/,
    doctype: /^<!DOCTYPE [^>]+>/i,
    endTag: new RegExp("^<\\/" + qnameCapture + "[^>]*>")
};
function parseHTML(html, options) {
    var stack = [];
    var index = 0;
    var last, lastTag;
    while (html) {
        last = html;
        if (!lastTag || !exports.isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<');
            if (textEnd === 0) {
                if (tagRegex.comment.test(html)) {
                    var commentEnd = html.indexOf('-->');
                    if (commentEnd >= 0) {
                        advance(commentEnd + 3);
                        continue;
                    }
                }
                var doctypeMatch = html.match(tagRegex.doctype);
                if (doctypeMatch) {
                    advance(doctypeMatch[0].length);
                    continue;
                }
                var endTagMatch = html.match(tagRegex.endTag);
                if (endTagMatch) {
                    var curIndex = index;
                    advance(endTagMatch[0].length);
                    continue;
                }
            }
        }
    }
    function advance(n) {
        index += n;
        html = html.substring(n);
    }
}
exports.parseHTML = parseHTML;
console.log(tagRegex.endTag);
//# sourceMappingURL=html-parser.js.map
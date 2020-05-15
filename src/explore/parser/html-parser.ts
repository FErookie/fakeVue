//这是一个html解析器 功能是当检测到不同的部分时触发不同的钩子函数  之后在钩子函数中创建ast
import {makemap} from "../../shared/utils";
export const isPlainTextElement = makemap('script,style,textarea', true)
const ncname = '[a-zA-Z_][\\w\\-\\.]*'
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const tagRegex = {
    comment: /^<!--/,
    doctype: /^<!DOCTYPE [^>]+>/i,
    endTag : new RegExp(`^<\\/${qnameCapture}[^>]*>`)
}


interface parserOptions {
    // 成员主要是钩子函数
    start(): void;
    end(): void;
    chars(): void;
    comment(): void;
}//到时候具体再改
export function parseHTML(html: string, options: parserOptions): void {
    const stack = [];
    let index = 0;
    let last, lastTag;
    while (html) {
        last = html;
        if(!lastTag || !isPlainTextElement(lastTag)) {
            let textEnd = html.indexOf('<');
            if (textEnd === 0) {
                //先看看是不是注释 注释第一个也是个<
                if (tagRegex.comment.test(html)) {
                    const commentEnd = html.indexOf('-->');
                    if (commentEnd >= 0){
                        //这个时候说明是个注释 应该出发注释的钩子函数
                        advance(commentEnd + 3)
                        continue
                    }
                }//其实还可能有条件注释 这里不多说
                const doctypeMatch = html.match(tagRegex.doctype);
                if (doctypeMatch) {
                    advance(doctypeMatch[0].length)
                    continue
                }
                const endTagMatch = html.match(tagRegex.endTag)
                if (endTagMatch) {
                    const curIndex = index
                    advance(endTagMatch[0].length)
                    //parseEndTag(endTagMatch[1], curIndex, index)
                    continue
                }

            }
        }
    }
    function advance (n: number) {
        index += n
        html = html.substring(n)
    }


}


console.log(tagRegex.endTag);

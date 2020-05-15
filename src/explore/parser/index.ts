import {ASTElement, astAttr} from "./ASTElement";
import {parseHTML} from './html-parser';
export function createASTElement (
    tag: string,
    attrs: Array<astAttr>,
    parent: ASTElement | void
):ASTElement {
    return new ASTElement(tag, 1, false, false, false, parent, attrs, {}, [], "");
}

export function parse (
    template: string
) {

}

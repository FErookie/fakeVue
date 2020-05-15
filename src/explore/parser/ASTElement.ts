export class astAttr{
    public name: string;
    public value: string;
    constructor(n: string, v: string) {
        this.name = n;
        this.value = v;
    }
}
export class ASTElement{
    private _tag: string;
    private _type: number;//只是用来表示
    private _staticRoot: boolean;
    private _isStatic: boolean;
    private _plain: boolean;
    private _parent: ASTElement | void;
    private _attrsList: Array<astAttr>;
    private _attrsMap: object;
    private _children: Array<ASTElement>;
    private _expression?: string;
    get tag(): string {
        return this._tag;
    }

    set tag(value: string) {
        this._tag = value;
    }

    get type(): number {
        return this._type;
    }

    set type(value: number) {
        this._type = value;
    }

    get staticRoot(): boolean {
        return this._staticRoot;
    }

    set staticRoot(value: boolean) {
        this._staticRoot = value;
    }

    get isStatic(): boolean {
        return this._isStatic;
    }

    set isStatic(value: boolean) {
        this._isStatic = value;
    }

    get plain(): boolean {
        return this._plain;
    }

    set plain(value: boolean) {
        this._plain = value;
    }

    get parent(): ASTElement | void {
        return this._parent;
    }

    set parent(value: ASTElement | void) {
        this._parent = value;
    }

    get attrsList(): Array<astAttr> {
        return this._attrsList;
    }

    set attrsList(value: Array<astAttr>) {
        this._attrsList = value;
    }

    get attrsMap(): object {
        return this._attrsMap;
    }

    set attrsMap(value: object) {
        this._attrsMap = value;
    }

    get children(): Array<ASTElement> {
        return this._children;
    }

    set children(value: Array<ASTElement>) {
        this._children = value;
    }

    get expression(): string {
        return this._expression;
    }

    set expression(value: string) {
        this._expression = value;
    }

    constructor(tag: string, type: number, staticRoot: boolean, isStatic: boolean, plain: boolean, parent: ASTElement | void, attrsList: Array<astAttr>, attrsMap: object, children: Array<ASTElement>, expression: string) {
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
}



import options, { initMixin } from './init'

class Vue{
    $options: options;
    $data:  {[index: string]:any} = {};
    constructor(options: object) {
        this._init(options);
    }
    _init(options: object) {

    }
}
initMixin(Vue);
export default Vue;

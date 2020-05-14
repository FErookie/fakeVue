import options from './init'

class Vue{
    $options: options;
    $data:  {[index: string]:any} = {};
    constructor(options: object) {
        this._init(options);
    }
    _init(options: object) {

    }
}



export default Vue;

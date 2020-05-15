import Watcher from "../observer/watcher";

export function isValidKey(key: string, obj: object) {
    return key in obj;
}
export function remove(subs: Array<Watcher>, sub: Watcher) {

}

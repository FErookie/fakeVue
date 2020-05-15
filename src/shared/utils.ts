export function makemap(
    str: string,
    expectsLowerCase?: boolean
){
    const map = new Map<string, boolean>();
    const list: Array<string> = str.split(',');
    list.forEach(value => {
        map.set(value, true);
    });
    return expectsLowerCase
        ? (val: string) => map.get(val.toLowerCase())
        : (val: string) => map.get(val)
}

export default function isValidKey(key: string, obj: object) {
    return key in obj;
}


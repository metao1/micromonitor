export function numberOfBytes(base64String) {
    return base64String.length / 4 * 3 - paddingSize(base64String);
    function endsWith(suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    function paddingSize(value) {
        if (endsWith('==', value)) {
            return 2;
        }
        if (endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
}

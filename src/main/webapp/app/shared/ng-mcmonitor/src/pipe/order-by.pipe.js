import { Pipe } from '@angular/core';
var McmOrderByPipe = /** @class */ (function () {
    function McmOrderByPipe() {
    }
    McmOrderByPipe.prototype.transform = function (values, predicate, reverse) {
        if (predicate === void 0) { predicate = ''; }
        if (reverse === void 0) { reverse = false; }
        if (predicate === '') {
            return reverse ? values.sort().reverse() : values.sort();
        }
        return values.sort(function (a, b) {
            if (a[predicate] < b[predicate]) {
                return reverse ? 1 : -1;
            }
            else if (b[predicate] < a[predicate]) {
                return reverse ? -1 : 1;
            }
            return 0;
        });
    };
    McmOrderByPipe.decorators = [
        { type: Pipe, args: [{ name: 'orderBy' },] },
    ];
    return McmOrderByPipe;
}());
export { McmOrderByPipe };

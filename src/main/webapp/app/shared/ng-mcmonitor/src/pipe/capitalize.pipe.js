import { Pipe } from '@angular/core';
var McmCapitalizePipe = /** @class */ (function () {
    function McmCapitalizePipe() {
    }
    McmCapitalizePipe.prototype.transform = function (input) {
        if (input !== null) {
            input = input.toLowerCase();
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    McmCapitalizePipe.decorators = [
        { type: Pipe, args: [{ name: 'capitalize' },] },
    ];
    return McmCapitalizePipe;
}());
export { McmCapitalizePipe };

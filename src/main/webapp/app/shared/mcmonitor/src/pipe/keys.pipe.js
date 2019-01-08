import { Pipe } from '@angular/core';
var McmKeysPipe = /** @class */ (function () {
    function McmKeysPipe() {
    }
    McmKeysPipe.prototype.transform = function (value) {
        var keys = [];
        var valueKeys = Object.keys(value);
        for (var i = 0; i < valueKeys.length; i++) {
            var key = valueKeys[i];
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    McmKeysPipe.decorators = [
        { type: Pipe, args: [{ name: 'keys' },] },
    ];
    return McmKeysPipe;
}());
export { McmKeysPipe };

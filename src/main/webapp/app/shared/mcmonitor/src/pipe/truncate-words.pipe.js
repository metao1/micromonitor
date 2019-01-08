import { Pipe } from '@angular/core';
var McmTruncateWordsPipe = /** @class */ (function () {
    function McmTruncateWordsPipe() {
    }
    McmTruncateWordsPipe.prototype.transform = function (input, words) {
        if (isNaN(words)) {
            return input;
        }
        if (words <= 0) {
            return '';
        }
        if (input) {
            var inputWords = input.split(/\s+/);
            if (inputWords.length > words) {
                input = inputWords.slice(0, words).join(' ') + '...';
            }
        }
        return input;
    };
    McmTruncateWordsPipe.decorators = [
        { type: Pipe, args: [{ name: 'truncateWords' },] },
    ];
    return McmTruncateWordsPipe;
}());
export { McmTruncateWordsPipe };

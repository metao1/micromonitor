import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { numberOfBytes } from './number-of-bytes';
var McmMinbytesValidatorDirective = /** @class */ (function () {
    function McmMinbytesValidatorDirective() {
    }
    McmMinbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && numberOfBytes(c.value) < this.mcmMinbytes) ? {
            minbytes: {
                valid: false
            }
        } : null;
    };
    McmMinbytesValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mcmMinbytes][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return McmMinbytesValidatorDirective; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    McmMinbytesValidatorDirective.ctorParameters = function () { return []; };
    McmMinbytesValidatorDirective.propDecorators = {
        "mcmMinbytes": [{ type: Input },],
    };
    return McmMinbytesValidatorDirective;
}());
export { McmMinbytesValidatorDirective };

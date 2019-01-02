import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { numberOfBytes } from './number-of-bytes';
var McmMaxbytesValidatorDirective = /** @class */ (function () {
    function McmMaxbytesValidatorDirective() {
    }
    McmMaxbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && numberOfBytes(c.value) > this.McmMaxbytes) ? {
            maxbytes: {
                valid: false
            }
        } : null;
    };
    McmMaxbytesValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[McmMaxbytes][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return McmMaxbytesValidatorDirective; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    McmMaxbytesValidatorDirective.ctorParameters = function () { return []; };
    McmMaxbytesValidatorDirective.propDecorators = {
        "McmMaxbytes": [{ type: Input },],
    };
    return McmMaxbytesValidatorDirective;
}());
export { McmMaxbytesValidatorDirective };

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
var McmMinValidatorDirective = /** @class */ (function () {
    function McmMinValidatorDirective() {
    }
    McmMinValidatorDirective.prototype.validate = function (c) {
        return (c.value === undefined || c.value === null || c.value >= this.mcmMin) ? null : {
            min: {
                valid: false
            }
        };
    };
    McmMinValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mcmMin][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return McmMinValidatorDirective; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    McmMinValidatorDirective.ctorParameters = function () { return []; };
    McmMinValidatorDirective.propDecorators = {
        "mcmMin": [{ type: Input },],
    };
    return McmMinValidatorDirective;
}());
export { McmMinValidatorDirective };

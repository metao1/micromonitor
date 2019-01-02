import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
var McmMaxValidatorDirective = /** @class */ (function () {
    function McmMaxValidatorDirective() {
    }
    McmMaxValidatorDirective.prototype.validate = function (c) {
        return (c.value === undefined || c.value === null || c.value <= this.McmMax) ? null : {
            max: {
                valid: false
            }
        };
    };
    McmMaxValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[McmMax][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return McmMaxValidatorDirective; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    McmMaxValidatorDirective.ctorParameters = function () { return []; };
    McmMaxValidatorDirective.propDecorators = {
        "McmMax": [{ type: Input },],
    };
    return McmMaxValidatorDirective;
}());
export { McmMaxValidatorDirective };

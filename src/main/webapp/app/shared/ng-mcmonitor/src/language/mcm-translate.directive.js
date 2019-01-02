import { Component, Input } from '@angular/core';
/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
/* tslint:disable */
var McmTranslateComponent = /** @class */ (function () {
    function McmTranslateComponent() {
    }
    McmTranslateComponent.decorators = [
        { type: Component, args: [{
                    selector: '[McmTranslate]',
                    template: '<span [innerHTML]="McmTranslate | translate:translateValues"></span>'
                },] },
    ];
    /** @nocollapse */
    McmTranslateComponent.propDecorators = {
        "McmTranslate": [{ type: Input },],
        "translateValues": [{ type: Input },],
    };
    return McmTranslateComponent;
}());
export { McmTranslateComponent };
/* tslint:enable */

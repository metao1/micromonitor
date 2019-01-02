var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Pipe } from '@angular/core';
import { McmFilterPipe } from './filter.pipe';
var McmPureFilterPipe = /** @class */ (function (_super) {
    __extends(McmPureFilterPipe, _super);
    function McmPureFilterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    McmPureFilterPipe.prototype.transform = function (input, filter, field) {
        return _super.prototype.transform.call(this, input, filter, field);
    };
    McmPureFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'pureFilter' },] },
    ];
    return McmPureFilterPipe;
}(McmFilterPipe));
export { McmPureFilterPipe };

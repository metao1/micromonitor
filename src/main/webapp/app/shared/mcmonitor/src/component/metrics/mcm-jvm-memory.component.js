import { Component, Input } from '@angular/core';
var McmJvmMemoryComponent = /** @class */ (function () {
    function McmJvmMemoryComponent() {
    }
    McmJvmMemoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-jvm-memory',
                    template: "<h4 mcmTranslate=\"metrics.jvm.memory.title\">Memory</h4>\n    <div *ngIf=\"!updating\">\n        <div *ngFor=\"let entry of jvmMemoryMetrics | keys\">\n                <span *ngIf=\"entry.value.max != -1; else other\">\n                    <span>{{entry.key}}</span> ({{entry.value.used / 1048576 | number:'1.0-0'}}M / {{entry.value.max / 1048576 | number:'1.0-0'}}M)\n                </span>\n            <div>Committed : {{entry.value.committed / 1048576 | number:'1.0-0'}}M</div>\n            <ng-template #other><span><span>{{entry.key}}</span> {{entry.value.used / 1048576 | number:'1.0-0'}}M</span>\n            </ng-template>\n            <ngb-progressbar *ngIf=\"entry.value.max != -1\" type=\"success\" [value]=\"100 * entry.value.used/entry.value.max\"\n                             [striped]=\"true\" [animated]=\"false\">\n                <span>{{entry.value.used * 100 / entry.value.max | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n        </div>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    McmJvmMemoryComponent.propDecorators = {
        "jvmMemoryMetrics": [{ type: Input },],
        "updating": [{ type: Input },],
    };
    return McmJvmMemoryComponent;
}());
export { McmJvmMemoryComponent };

import { Component, Input } from '@angular/core';
var McmMetricsHttpRequestComponent = /** @class */ (function () {
    function McmMetricsHttpRequestComponent() {
    }
    McmMetricsHttpRequestComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    McmMetricsHttpRequestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-metrics-request',
                    template: "<h3 mcmTranslate=\"metrics.jvm.http.title\">HTTP requests (time in millisecond)</h3>\n    <table class=\"table table-striped\" *ngIf=\"!updating\">\n        <thead>\n        <tr>\n            <th mcmTranslate=\"metrics.jvm.http.table.code\">Code</th>\n            <th mcmTranslate=\"metrics.jvm.http.table.count\">Count</th>\n            <th class=\"text-right\" mcmTranslate=\"metrics.jvm.http.table.mean\">Mean</th>\n            <th class=\"text-right\" mcmTranslate=\"metrics.jvm.http.table.max\">Max</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let entry of requestMetrics['percode'] | keys\">\n            <td>{{entry.key}}</td>\n            <td>\n                <ngb-progressbar [max]=\"requestMetrics['all'].count\" [value]=\"entry.value.count\" [striped]=\"true\"\n                                 [animated]=\"false\" type=\"success\">\n                    <span>{{entry.value.count}}</span>\n                </ngb-progressbar>\n            </td>\n            <td class=\"text-right\">\n                {{filterNaN(entry.value.mean) | number:'1.0-2'}}\n            </td>\n            <td class=\"text-right\">{{entry.value.max | number:'1.0-2'}}</td>\n        </tbody>\n    </table>"
                },] },
    ];
    /** @nocollapse */
    McmMetricsHttpRequestComponent.propDecorators = {
        "requestMetrics": [{ type: Input },],
        "updating": [{ type: Input },],
    };
    return McmMetricsHttpRequestComponent;
}());
export { McmMetricsHttpRequestComponent };

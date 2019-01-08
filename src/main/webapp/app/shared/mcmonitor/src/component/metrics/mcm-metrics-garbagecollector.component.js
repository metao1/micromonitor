import { Component, Input } from '@angular/core';
var McmMetricsGarbageCollectorComponent = /** @class */ (function () {
    function McmMetricsGarbageCollectorComponent() {
    }
    McmMetricsGarbageCollectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-metrics-garbagecollector',
                    template: "\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div *ngIf=\"garbageCollectorMetrics\">\n                        <span>\n                            GC Live Data Size/GC Max Data Size\n                            ({{garbageCollectorMetrics['jvm.gc.live.data.size'] / 1048576 | number:'1.0-0'}}M\n                            / {{garbageCollectorMetrics['jvm.gc.max.data.size'] / 1048576 | number:'1.0-0'}}M)</span>\n                    <ngb-progressbar [max]=\"garbageCollectorMetrics['jvm.gc.max.data.size']\"\n                                     [value]=\"garbageCollectorMetrics['jvm.gc.live.data.size']\" [striped]=\"true\"\n                                     [animated]=\"false\" type=\"success\">\n                        <span>{{100 * garbageCollectorMetrics['jvm.gc.live.data.size'] / garbageCollectorMetrics['jvm.gc.max.data.size'] | number:'1.0-2'}}%</span>\n                    </ngb-progressbar>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div *ngIf=\"garbageCollectorMetrics\">\n                        <span>\n                            GC Memory Promoted/GC Memory Allocated\n                            ({{garbageCollectorMetrics['jvm.gc.memory.promoted'] / 1048576 | number:'1.0-0'}}M\n                            / {{garbageCollectorMetrics['jvm.gc.memory.allocated'] / 1048576 | number:'1.0-0'}}M)</span>\n                    <ngb-progressbar [max]=\"garbageCollectorMetrics['jvm.gc.memory.allocated']\"\n                                     [value]=\"garbageCollectorMetrics['jvm.gc.memory.promoted']\" [striped]=\"true\"\n                                     [animated]=\"false\" type=\"success\">\n                        <span>{{100 * garbageCollectorMetrics['jvm.gc.memory.promoted'] / garbageCollectorMetrics['jvm.gc.memory.allocated'] | number:'1.0-2'}}%</span>\n                    </ngb-progressbar>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"row\" *ngIf=\"garbageCollectorMetrics\">\n                    <div class=\"col-md-9\">Classes loaded</div>\n                    <div class=\"col-md-3 text-right\">{{garbageCollectorMetrics.classesLoaded}}</div>\n                </div>\n                <div class=\"row\" *ngIf=\"garbageCollectorMetrics\">\n                    <div class=\"col-md-9\">Classes unloaded</div>\n                    <div class=\"col-md-3 text-right\">{{garbageCollectorMetrics.classesUnloaded}}</div>\n                </div>\n            </div>\n            <div class=\"table-responsive\" *ngIf=\"!updating && garbageCollectorMetrics\">\n                <table class=\"table table-striped\">\n                    <thead>\n                    <tr>\n                        <th></th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.count\">Count</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.mean\">Mean</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.min\">Min</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.p50\">p50</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.p75\">p75</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.p95\">p95</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.p99\">p99</th>\n                        <th class=\"text-right\" mcmTranslate=\"metrics.servicesstats.table.max\">Max</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>jvm.gc.pause</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause'].count}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause'].mean | number:'1.0-3'}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause']['0.0'] | number:'1.0-3'}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause']['0.5'] | number:'1.0-3'}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause']['0.75'] | number:'1.0-3'}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause']['0.95'] | number:'1.0-3'}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause']['0.99'] | number:'1.0-3'}}</td>\n                        <td class=\"text-right\">{{garbageCollectorMetrics['jvm.gc.pause'].max | number:'1.0-3'}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    McmMetricsGarbageCollectorComponent.propDecorators = {
        "garbageCollectorMetrics": [{ type: Input },],
        "updating": [{ type: Input },],
    };
    return McmMetricsGarbageCollectorComponent;
}());
export { McmMetricsGarbageCollectorComponent };

import { Component, Input } from '@angular/core';
var McmMetricsSystemComponent = /** @class */ (function () {
    function McmMetricsSystemComponent() {
    }
    McmMetricsSystemComponent.prototype.convertMillisecondsToDuration = function (ms) {
        var times = {
            year: 31557600000,
            month: 2629746000,
            day: 86400000,
            hour: 3600000,
            minute: 60000,
            second: 1000
        };
        var time_string = '';
        var plural = '';
        for (var key in times) {
            if (Math.floor(ms / times[key]) > 0) {
                if (Math.floor(ms / times[key]) > 1) {
                    plural = 's';
                }
                else {
                    plural = '';
                }
                time_string += Math.floor(ms / times[key]).toString() + ' ' + key.toString() + plural + ' ';
                ms = ms - times[key] * Math.floor(ms / times[key]);
            }
        }
        return time_string;
    };
    McmMetricsSystemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-metrics-system',
                    template: "<h4>System</h4>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-4\">Uptime</div>\n        <div class=\"col-md-8 text-right\">{{convertMillisecondsToDuration(systemMetrics[\"process.uptime\"])}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-4\">Start time</div>\n        <div class=\"col-md-8 text-right\">{{systemMetrics[\"process.start.time\"] | date:'full'}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-9\">Process CPU usage</div>\n        <div class=\"col-md-3 text-right\">{{100 * systemMetrics[\"process.cpu.usage\"] | number:'1.0-2'}} %</div>\n    </div>\n    <ngb-progressbar [value]=\"100 * systemMetrics['process.cpu.usage']\" [striped]=\"true\" [animated]=\"false\" type=\"success\"\n                     *ngIf=\"!updating\">\n        <span>{{100 * systemMetrics[\"process.cpu.usage\"] | number:'1.0-2'}} %</span>\n    </ngb-progressbar>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-9\">System CPU usage</div>\n        <div class=\"col-md-3 text-right\">{{100 * systemMetrics[\"system.cpu.usage\"] | number:'1.0-2'}} %</div>\n    </div>\n    <ngb-progressbar [value]=\"100 * systemMetrics['system.cpu.usage']\" [striped]=\"true\" [animated]=\"false\" type=\"success\"\n                     *ngIf=\"!updating\">\n        <span>{{100 * systemMetrics[\"system.cpu.usage\"] | number:'1.0-2'}} %</span>\n    </ngb-progressbar>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-9\">System CPU count</div>\n        <div class=\"col-md-3 text-right\">{{systemMetrics[\"system.cpu.count\"]}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-9\">System 1m Load average</div>\n        <div class=\"col-md-3 text-right\">{{systemMetrics[\"system.load.average.1m\"] | number:'1.0-2'}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-9\">Process files max</div>\n        <div class=\"col-md-3 text-right\">{{systemMetrics[\"process.files.max\"] | number:'1.0-0'}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"!updating\">\n        <div class=\"col-md-9\">Process files open</div>\n        <div class=\"col-md-3 text-right\">{{systemMetrics[\"process.files.open\"] | number:'1.0-0'}}</div>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    McmMetricsSystemComponent.propDecorators = {
        "systemMetrics": [{ type: Input },],
        "updating": [{ type: Input },],
    };
    return McmMetricsSystemComponent;
}());
export { McmMetricsSystemComponent };

import { Component, Input } from '@angular/core';
var McmMetricsEndpointsRequestsComponent = /** @class */ (function () {
    function McmMetricsEndpointsRequestsComponent() {
    }
    McmMetricsEndpointsRequestsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-metrics-endpoints-requests',
                    template: "<h3>Endpoints requests (time in millisecond)</h3>\n    <div class=\"table-responsive\" *ngIf=\"!updating\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th>Method</th>\n                <th>Endpoint url</th>\n                <th class=\"text-right\">Count</th>\n                <th class=\"text-right\">Mean</th>\n            </tr>\n            </thead>\n            <tbody>\n            <ng-container *ngFor=\"let entry of endpointsRequestsMetrics | keys\">\n                <tr *ngFor=\"let method of entry.value | keys\">\n                    <td>{{method.key}}</td>\n                    <td>{{entry.key}}</td>\n                    <td class=\"text-right\">{{method.value.count}}</td>\n                    <td class=\"text-right\">{{method.value.mean | number:'1.0-3'}}</td>\n                </tr>\n            </ng-container>\n            </tbody>\n        </table>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    McmMetricsEndpointsRequestsComponent.propDecorators = {
        "endpointsRequestsMetrics": [{ type: Input },],
        "updating": [{ type: Input },],
    };
    return McmMetricsEndpointsRequestsComponent;
}());
export { McmMetricsEndpointsRequestsComponent };

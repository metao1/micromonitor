import { Component, Input } from '@angular/core';
var McmMetricsCacheComponent = /** @class */ (function () {
    function McmMetricsCacheComponent() {
    }
    McmMetricsCacheComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    McmMetricsCacheComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-metrics-cache',
                    template: "<h3 mcmTranslate=\"metrics.cache.title\">Cache statistics</h3>\n    <div class=\"table-responsive\" *ngIf=\"!updating\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th mcmTranslate=\"metrics.cache.cachename\">Cache name</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.hits\">Cache Hits</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.misses\">Cache Misses</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.gets\">Cache Gets</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.puts\">Cache Puts</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.removals\">Cache Removals</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.evictions\">Cache Evictions</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.hitPercent\">Cache Hit %</th>\n                <th class=\"text-right\" data-translate=\"metrics.cache.missPercent\">Cache Miss %</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let entry of cacheMetrics | keys\">\n                <td>{{entry.key}}</td>\n                <td class=\"text-right\">{{entry.value['cache.gets.hit']}}</td>\n                <td class=\"text-right\">{{entry.value['cache.gets.miss']}}</td>\n                <td class=\"text-right\">{{entry.value['cache.gets.hit'] + entry.value['cache.gets.miss']}}</td>\n                <td class=\"text-right\">{{entry.value['cache.puts']}}</td>\n                <td class=\"text-right\">{{entry.value['cache.removals']}}</td>\n                <td class=\"text-right\">{{entry.value['cache.evictions']}}</td>\n                <td class=\"text-right\">\n                    {{filterNaN(100 * entry.value['cache.gets.hit'] / (entry.value['cache.gets.hit'] +\n                    entry.value['cache.gets.miss'])) | number: '1.0-4'}}\n                </td>\n                <td class=\"text-right\">\n                    {{filterNaN(100 * entry.value['cache.gets.miss'] / (entry.value['cache.gets.hit'] +\n                    entry.value['cache.gets.miss'])) | number: '1.0-4'}}\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    McmMetricsCacheComponent.propDecorators = {
        "cacheMetrics": [{ type: Input },],
        "updating": [{ type: Input },],
    };
    return McmMetricsCacheComponent;
}());
export { McmMetricsCacheComponent };

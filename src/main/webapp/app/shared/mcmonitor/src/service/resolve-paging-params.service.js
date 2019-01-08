import { Injectable } from '@angular/core';
import { McmPaginationUtil } from './pagination-util.service';
import * as i0 from "@angular/core";
import * as i1 from "./pagination-util.service";
var McmResolvePagingParams = /** @class */ (function () {
    function McmResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    McmResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var defaultSort = route.data['defaultSort'] ? route.data['defaultSort'] : 'id,asc';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : defaultSort;
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    McmResolvePagingParams.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    McmResolvePagingParams.ctorParameters = function () { return [
        { type: McmPaginationUtil, },
    ]; };
    McmResolvePagingParams.ngInjectableDef = i0.defineInjectable({ factory: function McmResolvePagingParams_Factory() { return new McmResolvePagingParams(i0.inject(i1.McmPaginationUtil)); }, token: McmResolvePagingParams, providedIn: "root" });
    return McmResolvePagingParams;
}());
export { McmResolvePagingParams };

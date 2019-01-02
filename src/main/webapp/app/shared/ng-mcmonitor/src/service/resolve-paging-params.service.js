import { Injectable } from '@angular/core';
import { McmPaginationUtil } from './pagination-util.service';
import * as i0 from "@angular/core";
import * as i1 from "./pagination-util.service";
var McmesolvePagingParams = /** @class */ (function () {
    function McmesolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    McmesolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var defaultSort = route.data['defaultSort'] ? route.data['defaultSort'] : 'id,asc';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : defaultSort;
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    McmesolvePagingParams.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    McmesolvePagingParams.ctorParameters = function () { return [
        { type: McmPaginationUtil, },
    ]; };
    McmesolvePagingParams.ngInjectableDef = i0.defineInjectable({ factory: function McmesolvePagingParams_Factory() { return new McmesolvePagingParams(i0.inject(i1.McmPaginationUtil)); }, token: McmesolvePagingParams, providedIn: "root" });
    return McmesolvePagingParams;
}());
export { McmesolvePagingParams };

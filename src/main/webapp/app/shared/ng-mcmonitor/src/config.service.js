var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Injectable } from '@angular/core';
import { McmModuleConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
var McmConfigService = /** @class */ (function () {
    function McmConfigService(moduleConfig) {
        this.CONFIG_OPTIONS = __assign({}, new McmModuleConfig(), moduleConfig);
    }
    McmConfigService.prototype.getConfig = function () {
        return this.CONFIG_OPTIONS;
    };
    McmConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    McmConfigService.ctorParameters = function () { return [
        { type: McmModuleConfig, },
    ]; };
    McmConfigService.ngInjectableDef = i0.defineInjectable({ factory: function McmConfigService_Factory() { return new McmConfigService(i0.inject(i1.McmModuleConfig)); }, token: McmConfigService, providedIn: "root" });
    return McmConfigService;
}());
export { McmConfigService };

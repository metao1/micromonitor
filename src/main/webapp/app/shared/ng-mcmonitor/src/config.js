import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var McmModuleConfig = /** @class */ (function () {
    function McmModuleConfig() {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-up';
        this.sortDescIcon = 'fa-sort-down';
        this.sortIconSelector = 'span.fa';
        this.i18nEnabled = false;
        this.defaultI18nLang = 'en';
        this.noi18nMessage = 'translation-not-found';
        this.alertAsToast = false;
        this.alertTimeout = 5000;
        this.classBadgeTrue = 'badge badge-success';
        this.classBadgeFalse = 'badge badge-danger';
        this.classTrue = 'fa fa-lg fa-check text-success';
        this.classFalse = 'fa fa-lg fa-times text-danger';
    }
    McmModuleConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    McmModuleConfig.ngInjectableDef = i0.defineInjectable({ factory: function McmModuleConfig_Factory() { return new McmModuleConfig(); }, token: McmModuleConfig, providedIn: "root" });
    return McmModuleConfig;
}());
export { McmModuleConfig };

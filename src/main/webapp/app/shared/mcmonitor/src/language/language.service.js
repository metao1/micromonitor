import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { McmConfigService } from '../config.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "../config.service";
var McmLanguageService = /** @class */ (function () {
    function McmLanguageService(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.currentLang = 'en';
        this.init();
    }
    McmLanguageService.prototype.init = function () {
        var config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    };
    McmLanguageService.prototype.changeLanguage = function (languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    };
    McmLanguageService.prototype.getCurrent = function () {
        return Promise.resolve(this.currentLang);
    };
    McmLanguageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    McmLanguageService.ctorParameters = function () { return [
        { type: TranslateService, },
        { type: McmConfigService, },
    ]; };
    McmLanguageService.ngInjectableDef = i0.defineInjectable({ factory: function McmLanguageService_Factory() { return new McmLanguageService(i0.inject(i1.TranslateService), i0.inject(i2.McmConfigService)); }, token: McmLanguageService, providedIn: "root" });
    return McmLanguageService;
}());
export { McmLanguageService };

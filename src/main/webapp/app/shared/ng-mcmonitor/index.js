import { NgModule, Sanitizer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Mcm_PIPES, Mcm_DIRECTIVES, Mcm_COMPONENTS } from './src/mcm-components';
import { McmMissingTranslationHandler, McmTranslateComponent, McmLanguageService } from './src/language';
import { McmModuleConfig } from './src/config';
import { McmConfigService } from './src/config.service';
import { McmAlertService, McmPaginationUtil, McmResolvePagingParams } from './src/service';
export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/config.service';
export * from './src/config';
export function translatePartialLoader(http) {
    return new TranslateHttpLoader(http, 'i18n/', ".json?buildTimestamp=" + process.env.BUILD_TIMESTAMP);
}
export function missingTranslationHandler(configService) {
    return new McmMissingTranslationHandler(configService);
}
var NgMcmpsterModule = /** @class */ (function () {
    function NgMcmpsterModule() {
    }
    NgMcmpsterModule.forRoot = function (moduleConfig) {
        return {
            ngModule: NgMcmpsterModule,
            providers: [
                { provide: McmLanguageService, useClass: McmLanguageService, deps: [TranslateService, McmConfigService] },
                { provide: McmResolvePagingParams, useClass: McmResolvePagingParams, deps: [McmPaginationUtil] },
                { provide: McmAlertService, useClass: McmAlertService, deps: [Sanitizer, McmConfigService, TranslateService] },
                { provide: McmModuleConfig, useValue: moduleConfig },
                { provide: McmConfigService, useClass: McmConfigService, deps: [McmModuleConfig] }
            ]
        };
    };
    NgMcmpsterModule.forChild = function (moduleConfig) {
        return {
            ngModule: NgMcmpsterModule,
            providers: [
                { provide: McmModuleConfig, useValue: moduleConfig },
            ]
        };
    };
    NgMcmpsterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: translatePartialLoader,
                                deps: [HttpClient]
                            },
                            missingTranslationHandler: {
                                provide: MissingTranslationHandler,
                                useFactory: missingTranslationHandler,
                                deps: [McmConfigService]
                            }
                        }),
                        CommonModule
                    ],
                    declarations: Mcm_PIPES.concat(Mcm_DIRECTIVES, Mcm_COMPONENTS, [
                        McmTranslateComponent
                    ]),
                    exports: Mcm_PIPES.concat(Mcm_DIRECTIVES, Mcm_COMPONENTS, [
                        McmTranslateComponent,
                        TranslateModule,
                        CommonModule
                    ])
                },] },
    ];
    return NgMcmpsterModule;
}());
export { NgMcmpsterModule };

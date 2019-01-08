import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { McmMissingTranslationHandler } from './src/language';
import { McmModuleConfig } from './src/config';
import { McmConfigService } from './src/config.service';
import { ModuleWithProviders } from '@angular/core';

export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/config.service';
export * from './src/config';

export declare function translatePartialLoader(http: HttpClient): TranslateHttpLoader;

export declare function missingTranslationHandler(configService: McmConfigService): McmMissingTranslationHandler;

export declare class McmonitorModule {
    static forRoot(): ModuleWithProviders;

    static forChild(moduleConfig: McmModuleConfig): ModuleWithProviders;
}

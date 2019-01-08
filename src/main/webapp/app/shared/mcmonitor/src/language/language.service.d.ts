import { TranslateService } from '@ngx-translate/core';
import { McmConfigService } from '../config.service';
export declare class McmLanguageService {
    private translateService;
    private configService;
    currentLang: string;
    constructor(translateService: TranslateService, configService: McmConfigService);
    init(): void;
    changeLanguage(languageKey: string): void;
    getCurrent(): Promise<string>;
}

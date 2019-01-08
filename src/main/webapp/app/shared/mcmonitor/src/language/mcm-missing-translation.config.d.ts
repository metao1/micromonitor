import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { McmConfigService } from '../config.service';
export declare class McmMissingTranslationHandler implements MissingTranslationHandler {
    private configService;
    constructor(configService: McmConfigService);
    handle(params: MissingTranslationHandlerParams): string;
}

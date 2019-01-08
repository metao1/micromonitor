import { McmConfigService } from '../config.service';
export declare class McmItemCountComponent {
    page: number;
    total: number;
    itemsPerPage: number;
    i18nEnabled: boolean;
    i18nValues(): string;
    constructor(config: McmConfigService);
}

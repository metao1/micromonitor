import { McmModuleConfig } from './config';
export declare class McmConfigService {
    CONFIG_OPTIONS: McmModuleConfig;
    constructor(moduleConfig?: McmModuleConfig);
    getConfig(): McmModuleConfig;
}

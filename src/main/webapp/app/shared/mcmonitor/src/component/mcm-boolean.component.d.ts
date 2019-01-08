import { OnInit } from '@angular/core';
import { McmConfigService } from '../config.service';
import { McmModuleConfig } from '../config';
export declare class McmBooleanComponent implements OnInit {
    value: boolean;
    classTrue: string;
    classFalse: string;
    textTrue: string;
    textFalse: string;
    config: McmModuleConfig;
    constructor(configService: McmConfigService);
    ngOnInit(): void;
}

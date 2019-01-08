import { Sanitizer } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { McmConfigService } from '../config.service';
export declare type McmAlertType = 'success' | 'danger' | 'warning' | 'info';
export interface McmAlert {
    id?: number;
    type: McmAlertType;
    msg: string;
    params?: any;
    timeout?: number;
    toast?: boolean;
    position?: string;
    scoped?: boolean;
    close?: (alerts: McmAlert[]) => void;
}
export declare class McmAlertService {
    private sanitizer;
    private configService;
    private translateService;
    private alertId;
    private alerts;
    private timeout;
    private toast;
    private i18nEnabled;
    constructor(sanitizer: Sanitizer, configService: McmConfigService, translateService: TranslateService);
    clear(): void;
    get(): McmAlert[];
    success(msg: string, params?: any, position?: string): McmAlert;
    error(msg: string, params?: any, position?: string): McmAlert;
    warning(msg: string, params?: any, position?: string): McmAlert;
    info(msg: string, params?: any, position?: string): McmAlert;
    private factory(alertOptions);
    addAlert(alertOptions: McmAlert, extAlerts: McmAlert[]): McmAlert;
    closeAlert(id: number, extAlerts?: McmAlert[]): any;
    closeAlertByIndex(index: number, thisAlerts: McmAlert[]): McmAlert[];
    isToast(): boolean;
}

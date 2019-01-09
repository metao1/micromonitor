import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GroupByPipe } from './pipe/group-by.pipe';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';
import {
    MicroMonitorRegistrySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiRouteSelectorComponent,
    JhiRefreshSelectorComponent
} from './';

@NgModule({
    imports: [MicroMonitorRegistrySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent, JhiRouteSelectorComponent, JhiRefreshSelectorComponent, GroupByPipe],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        }
    ],
    exports: [
        MicroMonitorRegistrySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        JhiRouteSelectorComponent,
        JhiRefreshSelectorComponent,
        GroupByPipe
    ]
})
export class MicroMonitorRegistrySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}

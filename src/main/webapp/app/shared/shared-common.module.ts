import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GroupByPipe } from './pipe/group-by.pipe';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';
import {
    MicroMonitorRegistrySharedLibsModule,
    AlertComponent,
    AlertErrorComponent,
    McmRouteSelectorComponent,
    McmRefreshSelectorComponent
} from './';

@NgModule({
    imports: [MicroMonitorRegistrySharedLibsModule],
    declarations: [AlertComponent, AlertErrorComponent, McmRouteSelectorComponent, McmRefreshSelectorComponent, GroupByPipe],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        }
    ],
    exports: [
        MicroMonitorRegistrySharedLibsModule,
        AlertComponent,
        AlertErrorComponent,
        McmRouteSelectorComponent,
        McmRefreshSelectorComponent,
        GroupByPipe
    ]
})
export class MicroMonitorRegistrySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}

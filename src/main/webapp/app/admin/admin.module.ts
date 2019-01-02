import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MicroMonitorRegistrySharedModule } from 'app/shared';

import {
    adminState,
    LogsComponent,
    McmMetricsMonitoringModalComponent,
    McmMetricsMonitoringComponent,
    McmHealthModalComponent,
    McmHealthCheckComponent,
    McmConfigurationComponent,
    McmDocsComponent,
    McmConfigurationService,
    McmLogfileComponent,
    McmHealthService,
    McmMetricsService,
    LogsService,
    McmLogfileService
} from './';

@NgModule({
    imports: [MicroMonitorRegistrySharedModule, RouterModule.forChild(adminState)],
    declarations: [
        LogsComponent,
        McmConfigurationComponent,
        McmDocsComponent,
        McmHealthCheckComponent,
        McmHealthModalComponent,
        McmMetricsMonitoringComponent,
        McmMetricsMonitoringModalComponent,
        McmLogfileComponent
    ],
    entryComponents: [McmHealthModalComponent, McmMetricsMonitoringModalComponent],
    providers: [McmConfigurationService, McmHealthService, McmMetricsService, LogsService, McmLogfileService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicroMonitorRegistryAdminModule {}

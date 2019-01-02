import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MicroMonitorRegistrySharedModule } from '../shared';
import { CommonModule } from '@angular/common';

import {
    registryState,
    McmApplicationsComponent,
    McmConfigComponent,
    McmEncryptionComponent,
    McmHistoryComponent,
    McmReplicasComponent,
    McmSSHComponent,
    McmApplicationsService,
    McmConfigService,
    McmEncryptionService,
    McmHistoryService,
    McmReplicasService,
    McmSSHService
} from './';

@NgModule({
    imports: [MicroMonitorRegistrySharedModule, CommonModule, RouterModule.forRoot(registryState, { useHash: true })],
    declarations: [
        McmApplicationsComponent,
        McmConfigComponent,
        McmEncryptionComponent,
        McmHistoryComponent,
        McmReplicasComponent,
        McmSSHComponent
    ],
    entryComponents: [],
    providers: [McmApplicationsService, McmConfigService, McmEncryptionService, McmHistoryService, McmReplicasService, McmSSHService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicroMonitorRegistryModule {}

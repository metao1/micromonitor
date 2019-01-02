import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MicroMonitorRegistrySharedModule } from 'app/shared';

import { HOME_ROUTE, HomeComponent } from './';
import { EurekaStatusService } from './eureka.status.service';
import { McmLoginModalComponent } from 'app/core/login/login.component';

@NgModule({
    imports: [MicroMonitorRegistrySharedModule, RouterModule.forRoot([HOME_ROUTE], { useHash: true })],
    declarations: [HomeComponent],
    entryComponents: [McmLoginModalComponent],
    providers: [EurekaStatusService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicroMonitorRegistryHomeModule {}

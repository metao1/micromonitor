import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie';

import {
    MicroMonitorRegistrySharedLibsModule,
    MicroMonitorRegistrySharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AuthSessionServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    LoginOAuth2Service,
    Principal,
    HasAnyAuthorityDirective,
    McmLoginModalComponent,
    McmRoutesService,
    McmRefreshService
} from './';

@NgModule({
    imports: [MicroMonitorRegistrySharedLibsModule, MicroMonitorRegistrySharedCommonModule],
    declarations: [McmLoginModalComponent, HasAnyAuthorityDirective],
    providers: [
        McmRoutesService,
        McmRefreshService,
        AuthServerProvider,
        AuthSessionServerProvider,
        CookieService,
        LoginService,
        LoginModalService,
        LoginOAuth2Service,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [McmLoginModalComponent],
    exports: [MicroMonitorRegistrySharedCommonModule, McmLoginModalComponent, HasAnyAuthorityDirective, DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicroMonitorRegistrySharedModule {}

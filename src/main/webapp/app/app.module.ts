import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { MicroMonitorRegistrySharedModule, UserRouteAccessService } from './shared';
import { MicroMonitorRegistryAppRoutingModule } from './app-routing.module';
import { MicroMonitorRegistryHomeModule } from './home/home.module';
import { MicroMonitorRegistryAdminModule } from './admin/admin.module';
import { MicroMonitorRegistryModule } from './registry/registry.module';

import { PaginationConfig } from './blocks/config/uib-pagination.config';

import { JhiMainComponent, NavbarComponent, FooterComponent, ProfileService, PageRibbonComponent, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        MicroMonitorRegistryAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'Jhi', separator: '-' }),
        MicroMonitorRegistrySharedModule,
        MicroMonitorRegistryHomeModule,
        MicroMonitorRegistryAdminModule,
        MicroMonitorRegistryModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        ProfileService,
        PaginationConfig,
        UserRouteAccessService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class MicroMonitorRegistryAppModule {}

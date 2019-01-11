import { Route } from '@angular/router';

import { JhiConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'mcm-configuration',
    component: JhiConfigurationComponent,
    data: {
        pageTitle: 'Cloud configuration'
    }
};

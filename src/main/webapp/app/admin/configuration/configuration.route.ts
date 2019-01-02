import { Route } from '@angular/router';

import { McmConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'mcm-configuration',
    component: McmConfigurationComponent,
    data: {
        pageTitle: 'Cloud configuration'
    }
};

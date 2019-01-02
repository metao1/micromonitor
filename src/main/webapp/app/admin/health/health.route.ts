import { Route } from '@angular/router';

import { McmHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'mcm-health',
    component: McmHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};

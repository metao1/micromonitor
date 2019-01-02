import { Route } from '@angular/router';

import { McmMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'mcm-metrics',
    component: McmMetricsMonitoringComponent,
    data: {
        pageTitle: 'Application Metrics'
    }
};

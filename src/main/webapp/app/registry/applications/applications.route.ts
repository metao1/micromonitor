import { Route } from '@angular/router';

import { McmApplicationsComponent } from './applications.component';

export const applicationsRoute: Route = {
    path: 'applications',
    component: McmApplicationsComponent,
    data: {
        pageTitle: 'Applications'
    }
};

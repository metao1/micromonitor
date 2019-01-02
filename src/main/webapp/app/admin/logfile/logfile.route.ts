import { Route } from '@angular/router';

import { McmLogfileComponent } from './logfile.component';

export const logfileRoute: Route = {
    path: 'logs',
    component: McmLogfileComponent,
    data: {
        pageTitle: 'Logs'
    }
};

import { Route } from '@angular/router';
import { McmConfigComponent } from './config.component';

export const configRoute: Route = {
    path: 'config',
    component: McmConfigComponent,
    data: {
        pageTitle: 'Configuration'
    }
};

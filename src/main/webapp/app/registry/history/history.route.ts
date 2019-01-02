import { Route } from '@angular/router';
import { McmHistoryComponent } from './history.component';

export const historyRoute: Route = {
    path: 'history',
    component: McmHistoryComponent,
    data: {
        pageTitle: 'History'
    }
};

import { Route } from '@angular/router';

import { McmDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: McmDocsComponent,
    data: {
        pageTitle: 'API'
    }
};

import { Route } from '@angular/router';
import { McmReplicasComponent } from './replicas.component';

export const replicasRoute: Route = {
    path: 'replicas',
    component: McmReplicasComponent,
    data: {
        pageTitle: 'Replicas'
    }
};

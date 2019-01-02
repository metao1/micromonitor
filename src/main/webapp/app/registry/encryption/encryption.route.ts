import { Route } from '@angular/router';
import { McmEncryptionComponent } from './encryption.component';

export const encryptionRoute: Route = {
    path: 'encryption',
    component: McmEncryptionComponent,
    data: {
        pageTitle: 'Encryption'
    }
};

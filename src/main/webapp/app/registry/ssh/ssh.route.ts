import { Route } from '@angular/router';
import { McmSSHComponent } from './ssh.component';

export const sshRoute: Route = {
    path: 'ssh',
    component: McmSSHComponent,
    data: {
        pageTitle: 'SSH public key'
    }
};

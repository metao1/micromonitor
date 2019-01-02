import { Component, OnInit } from '@angular/core';
import { McmSSHService } from './ssh.service';

@Component({
    selector: 'mcm-applications',
    templateUrl: './ssh.component.html'
})
export class McmSSHComponent implements OnInit {
    data: any;
    showMore: boolean;

    constructor(private sshService: McmSSHService) {
        this.showMore = true;
    }

    ngOnInit() {
        this.sshService.getSshPublicKey().subscribe((response) => {
            this.data = response;
        });
    }
}

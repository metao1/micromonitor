import { Component, OnDestroy, OnInit } from '@angular/core';
import { McmReplicasService } from './replicas.service';
import { McmRefreshService } from 'app/shared/refresh/refresh.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'mcm-replicas',
    templateUrl: './replicas.component.html',
    styleUrls: ['replicas.component.scss']
})
export class McmReplicasComponent implements OnInit, OnDestroy {
    showMore: boolean;
    replicas: any;

    refreshReloadSubscription: Subscription;

    constructor(private replicasService: McmReplicasService, private refreshService: McmRefreshService) {
        this.showMore = true;
    }

    ngOnInit() {
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe((empty) => this.refresh());
        this.refresh();
    }

    ngOnDestroy() {
        this.refreshReloadSubscription.unsubscribe();
    }

    refresh() {
        this.replicasService.findAll().subscribe((replicas) => {
            this.replicas = replicas;
        });
    }
}

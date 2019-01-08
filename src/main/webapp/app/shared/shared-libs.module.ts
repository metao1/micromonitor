import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McmonitorModule } from 'app/shared/mcmonitor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [NgbModule.forRoot(), McmonitorModule.forRoot(), InfiniteScrollModule],
    exports: [FormsModule, HttpClientModule, CommonModule, NgbModule, McmonitorModule, InfiniteScrollModule]
})
export class MicroMonitorRegistrySharedLibsModule {}

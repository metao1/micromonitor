import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMcmonitorModule } from 'ng-mcmonitor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [NgbModule.forRoot(), NgMcmonitorModule.forRoot({}), InfiniteScrollModule],
    exports: [FormsModule, HttpClientModule, CommonModule, NgbModule, NgMcmonitorModule, InfiniteScrollModule]
})
export class MicroMonitorRegistrySharedLibsModule {}

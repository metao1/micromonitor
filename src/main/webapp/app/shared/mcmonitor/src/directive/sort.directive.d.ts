import { Renderer, EventEmitter, ElementRef } from '@angular/core';
import { McmConfigService } from '../config.service';
export declare class McmSortDirective {
    predicate: string;
    ascending: boolean;
    callback: Function;
    sortIcon: string;
    sortAscIcon: string;
    sortDescIcon: string;
    sortIconSelector: string;
    predicateChange: EventEmitter<any>;
    ascendingChange: EventEmitter<any>;
    element: any;
    constructor(el: ElementRef, renderer: Renderer, configService: McmConfigService);
    sort(field: any): void;
    private resetClasses();
}

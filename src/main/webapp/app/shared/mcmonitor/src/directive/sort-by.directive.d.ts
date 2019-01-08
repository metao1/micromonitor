import { ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { McmSortDirective } from './sort.directive';
import { McmConfigService } from '../config.service';
export declare class McmSortByDirective implements AfterViewInit {
    private el;
    private renderer;
    mcmSortBy: string;
    sortAscIcon: string;
    sortDescIcon: string;
    mcmSort: McmSortDirective;
    constructor(mcmSort: McmSortDirective, el: ElementRef, renderer: Renderer, configService: McmConfigService);
    ngAfterViewInit(): void;
    onClick(): void;
    private applyClass();
}

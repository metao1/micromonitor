import { ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { McmSortDirective } from './sort.directive';
import { McmConfigService } from '../config.service';
export declare class McmSortByDirective implements AfterViewInit {
    private el;
    private renderer;
    McmSortBy: string;
    sortAscIcon: string;
    sortDescIcon: string;
    McmSort: McmSortDirective;
    constructor(McmSort: McmSortDirective, el: ElementRef, renderer: Renderer, configService: McmConfigService);
    ngAfterViewInit(): void;
    onClick(): void;
    private applyClass();
}

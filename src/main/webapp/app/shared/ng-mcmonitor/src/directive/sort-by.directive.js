import { Directive, Host, HostListener, Input, ElementRef, Renderer } from '@angular/core';
import { McmSortDirective } from './sort.directive';
import { McmConfigService } from '../config.service';
var McmSortByDirective = /** @class */ (function () {
    function McmSortByDirective(McmSort, el, renderer, configService) {
        this.el = el;
        this.renderer = renderer;
        this.sortAscIcon = 'fa-sort-up';
        this.sortDescIcon = 'fa-sort-down';
        this.McmSort = McmSort;
        var config = configService.getConfig();
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
    }
    McmSortByDirective.prototype.ngAfterViewInit = function () {
        if (this.McmSort.predicate && this.McmSort.predicate !== '_score' && this.McmSort.predicate === this.McmSortBy) {
            this.applyClass();
        }
    };
    McmSortByDirective.prototype.onClick = function () {
        if (this.McmSort.predicate && this.McmSort.predicate !== '_score') {
            this.McmSort.sort(this.McmSortBy);
            this.applyClass();
        }
    };
    McmSortByDirective.prototype.applyClass = function () {
        var childSpan = this.el.nativeElement.children[1];
        var add = this.sortAscIcon;
        if (!this.McmSort.ascending) {
            add = this.sortDescIcon;
        }
        this.renderer.setElementClass(childSpan, add, true);
    };
    ;
    McmSortByDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[McmSortBy]'
                },] },
    ];
    /** @nocollapse */
    McmSortByDirective.ctorParameters = function () { return [
        { type: McmSortDirective, decorators: [{ type: Host },] },
        { type: ElementRef, },
        { type: Renderer, },
        { type: McmConfigService, },
    ]; };
    McmSortByDirective.propDecorators = {
        "McmSortBy": [{ type: Input },],
        "onClick": [{ type: HostListener, args: ['click',] },],
    };
    return McmSortByDirective;
}());
export { McmSortByDirective };

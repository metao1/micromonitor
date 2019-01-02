import { Directive, Input, Output, Renderer, EventEmitter, ElementRef } from '@angular/core';
import { McmConfigService } from '../config.service';
var McmSortDirective = /** @class */ (function () {
    function McmSortDirective(el, renderer, configService) {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-up';
        this.sortDescIcon = 'fa-sort-down';
        this.sortIconSelector = 'span.fa';
        this.predicateChange = new EventEmitter();
        this.ascendingChange = new EventEmitter();
        this.element = el.nativeElement;
        var config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
        this.sortIconSelector = config.sortIconSelector;
    }
    McmSortDirective.prototype.sort = function (field) {
        this.resetClasses();
        if (field !== this.predicate) {
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    };
    McmSortDirective.prototype.resetClasses = function () {
        var allThIcons = this.element.querySelectorAll(this.sortIconSelector);
        // Use normal loop instead of forEach because IE does not support forEach on NodeList.
        for (var i = 0; i < allThIcons.length; i++) {
            allThIcons[i].classList.remove(this.sortAscIcon);
            allThIcons[i].classList.remove(this.sortDescIcon);
            allThIcons[i].classList.add(this.sortIcon);
        }
        ;
    };
    ;
    McmSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[McmSort]'
                },] },
    ];
    /** @nocollapse */
    McmSortDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: McmConfigService, },
    ]; };
    McmSortDirective.propDecorators = {
        "predicate": [{ type: Input },],
        "ascending": [{ type: Input },],
        "callback": [{ type: Input },],
        "predicateChange": [{ type: Output },],
        "ascendingChange": [{ type: Output },],
    };
    return McmSortDirective;
}());
export { McmSortDirective };

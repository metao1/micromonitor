import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { McmThreadModalComponent } from './mcm-metrics-modal-threads.component';
var McmJvmThreadsComponent = /** @class */ (function () {
    function McmJvmThreadsComponent(modalService) {
        this.modalService = modalService;
    }
    McmJvmThreadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadStats = {
            threadDumpRunnable: 0,
            threadDumpWaiting: 0,
            threadDumpTimedWaiting: 0,
            threadDumpBlocked: 0,
            threadDumpAll: 0
        };
        this.threadData.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadStats.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadStats.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadStats.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadStats.threadDumpBlocked += 1;
            }
        });
        this.threadStats.threadDumpAll =
            this.threadStats.threadDumpRunnable +
                this.threadStats.threadDumpWaiting +
                this.threadStats.threadDumpTimedWaiting +
                this.threadStats.threadDumpBlocked;
    };
    McmJvmThreadsComponent.prototype.open = function () {
        var modalRef = this.modalService.open(McmThreadModalComponent);
        modalRef.componentInstance.threadDump = this.threadData;
    };
    McmJvmThreadsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-jvm-threads',
                    template: "<h4 mcmTranslate=\"metrics.jvm.threads.title\">Threads </h4>\n    <span><span mcmTranslate=\"metrics.jvm.threads.runnable\">Runnable</span> {{threadStats.threadDumpRunnable}}</span>\n    <ngb-progressbar [value]=\"threadStats.threadDumpRunnable\" [max]=\"threadStats.threadDumpAll\" [striped]=\"true\"\n                     [animated]=\"false\" type=\"success\">\n        <span>{{threadStats.threadDumpRunnable * 100 / threadStats.threadDumpAll | number:'1.0-0'}}%</span>\n    </ngb-progressbar>\n    <span><span mcmTranslate=\"metrics.jvm.threads.timedwaiting\">Timed Waiting</span> ({{threadStats.threadDumpTimedWaiting}})</span>\n    <ngb-progressbar [value]=\"threadStats.threadDumpTimedWaiting\" [max]=\"threadStats.threadDumpAll\" [striped]=\"true\"\n                     [animated]=\"false\" type=\"warning\">\n        <span>{{threadStats.threadDumpTimedWaiting * 100 / threadStats.threadDumpAll | number:'1.0-0'}}%</span>\n    </ngb-progressbar>\n    <span><span mcmTranslate=\"metrics.jvm.threads.waiting\">Waiting</span> ({{threadStats.threadDumpWaiting}})</span>\n    <ngb-progressbar [value]=\"threadStats.threadDumpWaiting\" [max]=\"threadStats.threadDumpAll\" [striped]=\"true\"\n                     [animated]=\"false\" type=\"warning\">\n        <span>{{threadStats.threadDumpWaiting * 100 / threadStats.threadDumpAll | number:'1.0-0'}}%</span>\n    </ngb-progressbar>\n    <span><span mcmTranslate=\"metrics.jvm.threads.blocked\">Blocked</span> ({{threadStats.threadDumpBlocked}})</span>\n    <ngb-progressbar [value]=\"threadStats.threadDumpBlocked\" [max]=\"threadStats.threadDumpAll\" [striped]=\"true\"\n                     [animated]=\"false\" type=\"success\">\n        <span>{{threadStats.threadDumpBlocked * 100 / threadStats.threadDumpAll | number:'1.0-0'}}%</span>\n    </ngb-progressbar>\n    <div>Total: {{threadStats.threadDumpAll}}</div>\n    <button class=\"hand btn btn-primary btn-sm\" (click)=\"open()\" data-toggle=\"modal\" data-target=\"#threadDump\">\n        <span>Expand</span>\n    </button>"
                },] },
    ];
    /** @nocollapse */
    McmJvmThreadsComponent.ctorParameters = function () { return [
        { type: NgbModal, },
    ]; };
    McmJvmThreadsComponent.propDecorators = {
        "threadData": [{ type: Input },],
    };
    return McmJvmThreadsComponent;
}());
export { McmJvmThreadsComponent };

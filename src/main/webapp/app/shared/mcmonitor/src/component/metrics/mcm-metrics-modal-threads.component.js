import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var McmThreadModalComponent = /** @class */ (function () {
    function McmThreadModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    McmThreadModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting + this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    McmThreadModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    McmThreadModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mcm-thread-modal',
                    template: "\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" mcmTranslate=\"metrics.jvm.threads.dump.title\">Threads dump</h4>\n            <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">\n                All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span>\n            </span>&nbsp;\n            <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">\n                Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span>\n            </span>&nbsp;\n            <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span\n                class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp;\n            <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">\n                Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span>\n            </span>&nbsp;\n            <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span\n                class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp;\n            <div class=\"mt-2\">&nbsp;</div>\n            Filter\n            <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\">\n            <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\">\n                <h6>\n                    <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}}\n                    (ID\n                    {{entry.value.threadId}})\n                    <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\">\n                        <span [hidden]=\"entry.show\" mcmTranslate=\"metrics.jvm.threads.dump.show\">Show StackTrace</span>\n                        <span [hidden]=\"!entry.show\" mcmTranslate=\"metrics.jvm.threads.dump.hide\">Hide StackTrace</span>\n                    </a>\n                </h6>\n                <div class=\"card\" [hidden]=\"!entry.show\">\n                    <div class=\"card-body\">\n                        <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\">\n                            <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp>\n                            <span class=\"mt-1\"></span>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-sm table-responsive\">\n                    <thead>\n                    <tr>\n                        <th mcmTranslate=\"metrics.jvm.threads.dump.blockedtime\">Blocked Time</th>\n                        <th mcmTranslate=\"metrics.jvm.threads.dump.blockedcount\">Blocked Count</th>\n                        <th mcmTranslate=\"metrics.jvm.threads.dump.waitedtime\">Waited Time</th>\n                        <th mcmTranslate=\"metrics.jvm.threads.dump.waitedcount\">Waited Count</th>\n                        <th mcmTranslate=\"metrics.jvm.threads.dump.lockname\">Lock Name</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>{{entry.value.blockedTime}}</td>\n                        <td>{{entry.value.blockedCount}}</td>\n                        <td>{{entry.value.waitedTime}}</td>\n                        <td>{{entry.value.waitedCount}}</td>\n                        <td class=\"thread-dump-modal-lock\" title=\"{{entry.value.lockName}}\">\n                            <code>{{entry.value.lockName}}</code></td>\n                    </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary float-left\" data-dismiss=\"modal\"\n                    (click)=\"activeModal.dismiss('closed')\">Done\n            </button>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    McmThreadModalComponent.ctorParameters = function () { return [
        { type: NgbActiveModal, },
    ]; };
    return McmThreadModalComponent;
}());
export { McmThreadModalComponent };

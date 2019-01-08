import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export declare class McmThreadModalComponent implements OnInit {
    activeModal: NgbActiveModal;
    threadDumpFilter: any;
    threadDump: any;
    threadDumpAll: number;
    threadDumpBlocked: number;
    threadDumpRunnable: number;
    threadDumpTimedWaiting: number;
    threadDumpWaiting: number;
    constructor(activeModal: NgbActiveModal);
    ngOnInit(): void;
    getBadgeClass(threadState: any): 'badge-success' | 'badge-info' | 'badge-warning' | 'badge-danger';
}

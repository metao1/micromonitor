import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export declare class McmJvmThreadsComponent implements OnInit {
    private modalService;
    threadStats: {
        threadDumpAll: number;
        threadDumpRunnable: number;
        threadDumpTimedWaiting: number;
        threadDumpWaiting: number;
        threadDumpBlocked: number;
    };
    /**
     * object containing thread related metrics
     */
    threadData: any;
    constructor(modalService: NgbModal);
    ngOnInit(): void;
    open(): void;
}

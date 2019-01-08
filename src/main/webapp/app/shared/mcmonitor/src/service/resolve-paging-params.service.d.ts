import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { McmPaginationUtil } from './pagination-util.service';
export declare class McmResolvePagingParams implements Resolve<any> {
    private paginationUtil;
    constructor(paginationUtil: McmPaginationUtil);
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): {
        page: number;
        predicate: string;
        ascending: boolean;
    };
}

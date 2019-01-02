import { PipeTransform } from '@angular/core';
import { McmFilterPipe } from './filter.pipe';
export declare class McmPureFilterPipe extends McmFilterPipe implements PipeTransform {
    transform(input: Array<any>, filter: string, field: string): any;
}

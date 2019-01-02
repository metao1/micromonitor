import { PipeTransform } from '@angular/core';
export declare class McmTruncateCharactersPipe implements PipeTransform {
    transform(input: string, chars: number, breakOnWord?: boolean): string;
}

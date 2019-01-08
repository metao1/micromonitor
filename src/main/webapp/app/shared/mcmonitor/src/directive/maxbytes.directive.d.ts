import { FormControl } from '@angular/forms';
export declare class McmMaxbytesValidatorDirective {
    mcmMaxbytes: number;
    constructor();
    validate(
        c: FormControl
    ): {
        maxbytes: {
            valid: boolean;
        };
    };
}

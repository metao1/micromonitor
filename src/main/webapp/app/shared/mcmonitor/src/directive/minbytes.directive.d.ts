import { FormControl } from '@angular/forms';
export declare class McmMinbytesValidatorDirective {
    mcmMinbytes: number;
    constructor();
    validate(
        c: FormControl
    ): {
        minbytes: {
            valid: boolean;
        };
    };
}

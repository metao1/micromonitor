import { FormControl } from '@angular/forms';
export declare class McmMinValidatorDirective {
    mcmMin: number;
    constructor();
    validate(
        c: FormControl
    ): {
        min: {
            valid: boolean;
        };
    };
}

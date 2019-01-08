import { FormControl } from '@angular/forms';
export declare class McmMaxValidatorDirective {
    mcmMax: number;
    constructor();
    validate(
        c: FormControl
    ): {
        max: {
            valid: boolean;
        };
    };
}

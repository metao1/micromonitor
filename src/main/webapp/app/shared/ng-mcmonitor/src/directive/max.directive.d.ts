import { FormControl } from '@angular/forms';
export declare class McmMaxValidatorDirective {
    McmMax: number;
    constructor();
    validate(c: FormControl): {
        max: {
            valid: boolean;
        };
    };
}

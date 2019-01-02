import { FormControl } from '@angular/forms';
export declare class McmMinValidatorDirective {
    McmMin: number;
    constructor();
    validate(c: FormControl): {
        min: {
            valid: boolean;
        };
    };
}

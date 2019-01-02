import { FormControl } from '@angular/forms';
export declare class McmMinbytesValidatorDirective {
    McmMinbytes: number;
    constructor();
    validate(c: FormControl): {
        minbytes: {
            valid: boolean;
        };
    };
}

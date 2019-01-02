import { FormControl } from '@angular/forms';
export declare class McmMaxbytesValidatorDirective {
    McmMaxbytes: number;
    constructor();
    validate(c: FormControl): {
        maxbytes: {
            valid: boolean;
        };
    };
}

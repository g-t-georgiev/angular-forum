import { Directive, Input } from '@angular/core';
import { AbstractControl, NgModel, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { passwordMatchValidator } from '../utils';

@Directive({
    selector: '[appPasswordMatch]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordMatchDirective,
            multi: true
        }
    ]
})
export class PasswordMatchDirective implements Validator {

    @Input() passwordControlRef!: NgModel;

    validate(control: AbstractControl): ValidationErrors | null {
        return passwordMatchValidator(this.passwordControlRef)(control);
    }

}

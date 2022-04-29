import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
    selector: '[appValidateEmail]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ValidateEmailDirective,
            multi: true
        }
    ]
})
export class ValidateEmailDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return Validators.email(control);
    }

}
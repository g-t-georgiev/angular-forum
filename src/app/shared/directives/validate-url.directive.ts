import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appValidateUrl]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ValidateUrlDirective,
            multi: true
        }
    ]
})
export class ValidateUrlDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        const { value } = control;

        if (!value) return null;

        return /(?=^https?:\/\/).+/.test(value)
        ? null 
        : {
            url: true
        }

    }

}
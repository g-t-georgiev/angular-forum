import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appMaxlength]',
    exportAs: 'maxlength',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MaxlengthDirective,
            multi: true
        }
    ]
})
export class MaxlengthDirective implements Validator {

    @Input('appMaxlength') maxlength!: string | number;

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control.value) return null;

        const validationErrors = control.value.length > this.maxlength
        ? {
            maxlength: true
        }
        : null;

        console.log(validationErrors);

        return validationErrors
    }

}
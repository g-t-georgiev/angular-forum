import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, NgModel } from '@angular/forms';

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

    private _passwordControl!: NgModel;

    @Input() set passwordControl(control: NgModel) {
        this._passwordControl = control;
    }

    get passwordControl(): NgModel {
        return this._passwordControl;
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return passwordMatchValidator(this.passwordControl)(control);
    }

}

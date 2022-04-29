import { NgModel, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

export function passwordMatchValidator(password: NgModel): ValidatorFn {
    return function (repeatPassword: AbstractControl): ValidationErrors | null {
        const { value: repeatPasswordValue } = repeatPassword ?? {};
        const { value: passwordValue } = password ?? {};

        if (!repeatPasswordValue || !passwordValue) return null;

        const passwordValueChanges: Subscription = password.control.valueChanges
            .subscribe({
                next: (passwordValue) => {
                    // console.log(passwordValue);
                    repeatPassword.updateValueAndValidity({ onlySelf: true });
                    passwordValueChanges.unsubscribe();
                },
                complete: () => {
                    passwordValueChanges.unsubscribe();
                },
                error: (err) => {
                    // console.log(err);
                    passwordValueChanges.unsubscribe();
                }
            })

        return passwordValue === repeatPasswordValue 
        ? null 
        : {
            passwordsMismatch: true
        }
    }
}
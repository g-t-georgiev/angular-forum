import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

export function matchingPasswordsValidator(password: AbstractControl): ValidatorFn {
    return function (repeatPassword: AbstractControl): ValidationErrors | null {
        const { value: repeatPasswordValue } = repeatPassword ?? {};
        const { value: passwordValue } = password ?? {};

        if (!repeatPasswordValue || !passwordValue) return null;

        const passwordValueChanges: Subscription = password.valueChanges
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
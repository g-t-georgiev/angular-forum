import { AbstractControl, ValidatorFn, ValidationErrors, NgModel } from '@angular/forms';

export function passwordMatchValidator(password: NgModel): ValidatorFn {
    return function (repeatPassword: AbstractControl): ValidationErrors | null {
        if (!repeatPassword?.value) return null;

        const subscription = password.control.valueChanges
            .subscribe({
                next: () => {
                    repeatPassword.updateValueAndValidity();
                    subscription.unsubscribe();
                },
                complete: () => {
                    subscription.unsubscribe();
                },
                error: () => {
                    subscription.unsubscribe();
                }
            })

        return password.value === repeatPassword.value
        ? null 
        : {
            passwordMismatch: true
        }
    }
}
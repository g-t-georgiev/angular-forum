import { NgModel } from '@angular/forms';

export function showErrorMessage(control: NgModel): boolean {
    return (control.touched ?? false) && (control.invalid ?? false);
}
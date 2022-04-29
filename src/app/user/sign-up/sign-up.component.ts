import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AppThemeSwitchService } from 'src/app/core/services';
import { showErrorMessage } from 'src/app/shared/utils';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    showErrorMessage = showErrorMessage;
    isDarkModeOn$!: Observable<boolean>

    constructor(
        private themeService: AppThemeSwitchService
    ) {
        this.isDarkModeOn$ = themeService.isDarkModeOn$;
    }

    registerSubmitHandler(registerForm: NgForm): void {
        console.log(registerForm.status);
        if (registerForm.invalid) return;

        console.log(registerForm.value);
        registerForm.reset();
    }

}
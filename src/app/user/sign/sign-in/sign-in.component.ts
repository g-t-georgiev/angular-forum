import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { AppThemeSwitchService } from 'src/app/core/services';
import { showErrorMessage } from 'src/app/shared/utils';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    showErrorMessage = showErrorMessage;
    isDarkModeOn$!: Observable<boolean>

    constructor(
        private themeService: AppThemeSwitchService
    ) {
        this.isDarkModeOn$ = themeService.isDarkModeOn$;
    }

    loginSubmitHandler(loginForm: NgForm): void {
        console.log(loginForm.status);
        if (loginForm.invalid) return;

        console.log(loginForm.value);
        loginForm.reset();
    }

}

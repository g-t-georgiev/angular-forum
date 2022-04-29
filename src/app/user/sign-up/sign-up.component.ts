import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppThemeSwitchService, AuthService } from 'src/app/core/services';
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
        private router: Router,
        private themeService: AppThemeSwitchService,
        private authService: AuthService
    ) {
        this.isDarkModeOn$ = themeService.isDarkModeOn$;
    }

    registerSubmitHandler(registerForm: NgForm): void {
        if (registerForm.invalid) return;

        this.authService.register$(registerForm.value)
            .subscribe({
                complete: () => {
                    registerForm.reset();
                    this.router.navigate(['/users/login']);
                },
                error: (err) => {
                    // console.log(err);
                }
            });
    }

}
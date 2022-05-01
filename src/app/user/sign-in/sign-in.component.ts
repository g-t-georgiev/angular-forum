import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'

import { AppThemeSwitchService, AuthService } from 'src/app/core/services';
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
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private themeService: AppThemeSwitchService
    ) {
        this.isDarkModeOn$ = themeService.isDarkModeOn$;
    }

    loginSubmitHandler(loginForm: NgForm): void {
        console.log(loginForm.status);
        if (loginForm.invalid) return;

        this.authService.login$(loginForm.value)
            .subscribe({
                complete: () => {
                    loginForm.reset();
                    const redirectToPath = this.activatedRoute.snapshot.queryParams?.['redirectTo'] ?? '/';
                    this.router.navigate([redirectToPath]);
                },
                error: (err) => {
                    // console.log(err);
                }
            })
    }

}

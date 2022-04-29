import { Component, } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { AppThemeSwitchService } from '../../core/services'

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.css']
})
export class SignComponent {

    private currentUrl: ActivatedRoute[];
    private urlSegment: UrlSegment;
    private currentEndpoint!: string;
    
    pageMode!: string;
    isDarkModeOn$!: Observable<boolean>

    constructor(
        private router: ActivatedRoute,
        private themeService: AppThemeSwitchService
    ) {
        this.currentUrl = this.router.pathFromRoot;
        [ this.urlSegment ] = this.currentUrl[2].snapshot.url;
        this.currentEndpoint = this.urlSegment.path;
        this.pageMode = this.currentEndpoint;
        this.isDarkModeOn$ = this.themeService.isDarkModeOn$;
    }

    registerSubmitHandler(registerForm: NgForm): void {
        if (registerForm.invalid) {
            return;
        }

        console.log(registerForm.value);
    }

}
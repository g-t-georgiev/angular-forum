import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppLangSwitchService, AppThemeSwitchService, LangOptions } from '../services';



@Component({
    selector: 'app-app-lang-switch',
    templateUrl: './app-lang-switch.component.html',
    styleUrls: ['./app-lang-switch.component.css']
})
export class AppLangSwitchComponent {

    // Hard-coded list of supported languages
    readonly langList = LangOptions;

    currentLang$!: Observable<string>;
    isDarkModeOn$!: Observable<boolean>;

    constructor(
        private appLangSwitchService: AppLangSwitchService,
        private appThemeSwitchService: AppThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.currentLang$ = this.appLangSwitchService.currentLang$;
        this.isDarkModeOn$ = this.appThemeSwitchService.isDarkModeOn$;
    }

    toggle(el: HTMLSelectElement): void {
        this.appLangSwitchService.toggle(el.value);
    }

}
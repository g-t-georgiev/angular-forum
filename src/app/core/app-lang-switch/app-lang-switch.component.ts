import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppThemeSwitchService, LanguageService } from '../services';



@Component({
    selector: 'app-app-lang-switch',
    templateUrl: './app-lang-switch.component.html',
    styleUrls: ['./app-lang-switch.component.css']
})
export class AppLangSwitchComponent implements OnInit, OnDestroy {

    // Hard-coded list of supported languages
    readonly languageOptions = LanguageService.LangOptions;

    opened: boolean;
    currentLang!: string;
    darkModeOn!: boolean;
    subscription!: Subscription;

    constructor(
        private languageService: LanguageService.AppLangSwitchService,
        private colorThemeService: AppThemeSwitchService,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.opened = false;
    }

    ngOnInit(): void {
        this.subscription = combineLatest({
            currentLang: this.languageService.currentLang$,
            darkModeOn: this.colorThemeService.isDarkModeOn$
        }).pipe(
            tap(
                ({ currentLang, darkModeOn }) => {
                    this.currentLang = currentLang ?? 'N/A';
                    this.darkModeOn = darkModeOn;
                }
            )
        ).subscribe();
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    toggleDropdown(ev?: Event) {
        this.opened = !this.opened;
    }

    toggleLanguage(ev: MouseEvent): void {
        const selectedOption = ev.target as HTMLElement;
        const selectedOptionValue = selectedOption.dataset['value'];
        this.languageService.toggle(selectedOptionValue);
    }

    showSelectedLanguage(): string {
        return Object
            .entries(this.languageOptions)
            .find(
                ([ language_name, language_code ]) => {
                    return language_code === this.currentLang;
                }
            )
            ?.[0] ?? '';
    }

}
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable()
export class AppThemeSwitchService {

    private _isSystemPreferenceOn: BehaviorSubject<boolean>;
    isSystemPreferenceOn$: Observable<boolean>;

    private _isDarkModeOn: BehaviorSubject<boolean>;
    isDarkModeOn$: Observable<boolean>;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
        this._isSystemPreferenceOn = new BehaviorSubject<boolean>(false);
        this.isSystemPreferenceOn$ = this._isSystemPreferenceOn.asObservable();
        this._isDarkModeOn = new BehaviorSubject<boolean>(false);
        this.isDarkModeOn$ = this._isDarkModeOn.asObservable();
    }

    toggleDarkMode(value: boolean) {
        this._isDarkModeOn.next(value);
        this.document.body.classList.toggle('app__theme--dark', value);
    }

    toggleThemePreference(value: boolean) {
        this._isSystemPreferenceOn.next(value);
    }

    sync() {
        const darkColorSchemePreferenceMq = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)');
        const changeColorSchemePreferenceHandler = (ev: MediaQueryListEvent) => this.toggleDarkMode(ev.matches);

        this.toggleDarkMode(darkColorSchemePreferenceMq?.matches ?? false);

        darkColorSchemePreferenceMq?.addEventListener('change', changeColorSchemePreferenceHandler);

        return () => {
            darkColorSchemePreferenceMq?.removeEventListener('change', changeColorSchemePreferenceHandler);
        }
    }

}
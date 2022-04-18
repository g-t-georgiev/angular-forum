import { Injectable, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

const DARK = '(prefers-color-scheme: dark)';
const LIGHT = '(prefers-color-scheme: light)';

interface Mode {
    name: 'dark' | 'light';
    type: 'prefer' | 'default';
}

class ThemeMode implements Mode {

    constructor(
        public name: 'dark' | 'light', 
        public type: 'prefer' | 'default'
    ) {
        this.name = name;
        this.type = type;
    }

}

@Injectable()
export class AppModeSwitchService {

    private _window = this.document.defaultView;
    private _darkColorPreferenceQuery: MediaQueryList | undefined;
    private _lightColorPreferenceQuery: MediaQueryList | undefined;
    private _isDarkModePreferred: boolean = false;
    private _isLightModePreferred: boolean = false;

    private _themeMode: BehaviorSubject<Mode>;
    themeMode$: Observable<Mode>;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
        this._themeMode = new BehaviorSubject<Mode>(
            this._isDarkModePreferred 
            ? { name: 'dark', type: 'prefer' }
            : this._isLightModePreferred 
            ? { name: 'light', type: 'prefer' }
            : { name: 'light', type: 'default' }
        );
        this.themeMode$ = this._themeMode.asObservable();

        this._darkColorPreferenceQuery = this._window?.matchMedia?.(DARK);
        this._lightColorPreferenceQuery = this._window?.matchMedia?.(LIGHT);
    }

    toggleThemeMode(ev: Event) { 
        console.log(ev);
    }

    detectPreference(): void {
        
        if (this._darkColorPreferenceQuery?.matches) {
            console.log('Dark mode preferred: ', this._darkColorPreferenceQuery?.matches);
            this._isDarkModePreferred = true;
        }

        if (this._lightColorPreferenceQuery?.matches) {
            console.log('Light mode preferred: ', this._lightColorPreferenceQuery?.matches);
            this._isLightModePreferred = true;
        }
        
    }
}
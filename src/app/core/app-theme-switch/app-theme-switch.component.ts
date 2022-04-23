import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppThemeSwitchService } from '../services';

@Component({
    selector: 'app-theme-switch',
    templateUrl: './app-theme-switch.component.html',
    styleUrls: ['./app-theme-switch.component.css']
})
export class AppThemeSwitchComponent implements OnInit {

    readonly visible: boolean = true;
    isDarkModeOn$!: Observable<boolean>;
    isSystemPreferenceOn$!: Observable<boolean>;

    constructor(
        private appThemeSwitchService: AppThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.isDarkModeOn$ = this.appThemeSwitchService.isDarkModeOn$;
        this.isSystemPreferenceOn$ = this.appThemeSwitchService.isSystemPreferenceOn$;
    }

    toggleThemeMode(value: boolean) {
        this.appThemeSwitchService.toggleDarkMode(value);
    }

    toggleThemePreference(value: boolean) {
        this.appThemeSwitchService.toggleThemePreference(value);
    }

}
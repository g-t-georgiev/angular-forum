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

    constructor(
        private appThemeSwitchService: AppThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.isDarkModeOn$ = this.appThemeSwitchService.isDarkModeOn$;
    }

    toggleDarkMode(value: boolean) {
        this.appThemeSwitchService.toggle(!value);
    }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppThemeSwitchService } from '../services';

@Component({
    selector: 'app-theme-switch',
    templateUrl: './app-theme-switch.component.html',
    styleUrls: ['./app-theme-switch.component.css']
})
export class AppThemeSwitchComponent implements OnInit, OnDestroy {

    private subscription!: Subscription;

    isDarkModeOn: boolean = false;

    constructor(
        private appThemeSwitchService: AppThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.subscription = this.appThemeSwitchService
            .isDarkModeOn$
            .pipe(
                tap(
                    value => this.isDarkModeOn = value
                )
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    toggleDarkMode() {
        this.appThemeSwitchService.toggle(!this.isDarkModeOn);
    }

}
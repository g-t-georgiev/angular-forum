import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppModeSwitchService } from '../services';

@Component({
    selector: 'app-mode-switch',
    templateUrl: './app-mode-switch.component.html',
    styleUrls: ['./app-mode-switch.component.css']
})
export class AppModeSwitchComponent implements OnInit, OnDestroy {

    private subscription!: Subscription;

    isDarkModeOn: boolean = false;

    constructor(
        private appModeService: AppModeSwitchService
    ) { }

    ngOnInit(): void {
        this.subscription = this.appModeService
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
        this.appModeService.toggle(!this.isDarkModeOn);
    }

}
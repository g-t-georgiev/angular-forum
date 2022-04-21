import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppThemeSwitchService } from './core/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy { 
    constructor(
        private appThemeSwitchService: AppThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.appThemeSwitchService.subscribe();
    }

    ngOnDestroy(): void {
        this.appThemeSwitchService.unsubscribe();
    }
    
}
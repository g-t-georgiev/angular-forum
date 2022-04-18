import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppModeSwitchService } from './core/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy { 
    constructor(
        private appModeService: AppModeSwitchService
    ) { }

    ngOnInit(): void {
        this.appModeService.subscribe();
    }

    ngOnDestroy(): void {
        this.appModeService.unsubscribe();
    }
    
}
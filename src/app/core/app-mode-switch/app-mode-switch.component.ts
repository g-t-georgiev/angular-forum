import { Component, OnInit } from '@angular/core';
import { AppModeSwitchService } from '../services';

@Component({
    selector: 'app-mode-switch',
    templateUrl: './app-mode-switch.component.html',
    styleUrls: ['./app-mode-switch.component.css']
})
export class AppModeSwitchComponent implements OnInit {

    constructor(
        private appThemeService: AppModeSwitchService
    ) { }

    ngOnInit(): void {
    }

}
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-mode-switch',
    templateUrl: './app-mode-switch.component.html',
    styleUrls: ['./app-mode-switch.component.css']
})
export class AppModeSwitchComponent implements OnInit {

    constructor(
        @Inject(DOCUMENT) document: Document
    ) { }

    ngOnInit(): void {
    }

}
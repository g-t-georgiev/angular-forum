import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable()
export class AppModeSwitchService {

    private _isDarkModeOn: BehaviorSubject<boolean>;
    isDarkModeOn$: Observable<boolean>;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
        this._isDarkModeOn = new BehaviorSubject<boolean>(false);
        this.isDarkModeOn$ = this._isDarkModeOn.asObservable();
    }

    toggle(value: boolean) { 
        this._isDarkModeOn.next(value);
        this.document.body.classList.toggle('dark', value);
        this.document.body.classList.toggle('light', !value);
    }

    sync(): void {
        const isDarkColorSchemePreferred = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
        this._isDarkModeOn.next(isDarkColorSchemePreferred);
        this.document.body.classList.toggle('dark', isDarkColorSchemePreferred);
        this.document.body.classList.toggle('light', !isDarkColorSchemePreferred);
    }

    colorSchemePrefChangeHandler(ev: MediaQueryListEvent) {
        this._isDarkModeOn.next(!ev.matches);
        this.document.body.classList.toggle('dark', !ev.matches);
        this.document.body.classList.toggle('light', ev.matches);
    }

    boundContextHandler = this.colorSchemePrefChangeHandler.bind(this);


    subscribe() {
        this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', this.boundContextHandler);
        this.document.defaultView?.matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', this.boundContextHandler);
    }

    unsubscribe() {
        this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').removeEventListener?.('change', this.boundContextHandler);
        this.document.defaultView?.matchMedia('(prefers-color-scheme: light)').removeEventListener?.('change', this.boundContextHandler);
    }

}
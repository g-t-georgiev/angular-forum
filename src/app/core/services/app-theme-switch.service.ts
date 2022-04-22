import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';


const darkColorSchemePrefMq = '(prefers-color-scheme: dark)';

@Injectable()
export class AppThemeSwitchService {

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
        this.document.body.classList.toggle('app__theme--dark', value);
    }

    init(): void {
        const isDarkColorSchemePreferred = this.colorSchemePrefMatch(darkColorSchemePrefMq)?.matches ?? false;
        this._isDarkModeOn.next(isDarkColorSchemePreferred);
        this.document.body.classList.toggle('app__theme--dark', isDarkColorSchemePreferred);
    }

    private colorSchemePrefMatch(colorSchemeMq: string): MediaQueryList | undefined {
        return this.document.defaultView?.matchMedia(colorSchemeMq);
    }

    private colorSchemePrefChangeHandler(ev: MediaQueryListEvent) {
        this._isDarkModeOn.next(ev.matches);
        this.document.body.classList.toggle('app__theme--dark', ev.matches);
    }

    private boundContextHandler = this.colorSchemePrefChangeHandler.bind(this);


    subscribe() {
        this.colorSchemePrefMatch(darkColorSchemePrefMq)?.addEventListener('change', this.boundContextHandler);
    }

    unsubscribe() {
        this.colorSchemePrefMatch(darkColorSchemePrefMq)?.removeEventListener('change', this.boundContextHandler);
    }

}
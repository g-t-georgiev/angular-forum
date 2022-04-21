import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppLangSwitchService, LangOptions } from '../services';



@Component({
    selector: 'app-app-lang-switch',
    templateUrl: './app-lang-switch.component.html',
    styleUrls: ['./app-lang-switch.component.css']
})
export class AppLangSwitchComponent {

    // Hard-coded list of supported languages
    readonly langList = LangOptions;

    currentLang$!: Observable<string>;
    preferedLang$!: Observable<string>;

    constructor(
        private appLangSwitchService: AppLangSwitchService
    ) { }

    ngOnInit(): void {
        this.currentLang$ = this.appLangSwitchService.currentLang$;
        this.preferedLang$ = this.appLangSwitchService.preferedLang$;
    }

    toggle(el: HTMLSelectElement): void {
        this.appLangSwitchService.toggle(el.value);
    }

}
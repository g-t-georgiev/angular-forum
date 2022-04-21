import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export const LangOptions = {
    English: 'en',
    Bulgarian: 'bg'
}

@Injectable()
export class AppLangSwitchService {

    private _currentLang = new BehaviorSubject<string>(LangOptions.English);
    currentLang$: Observable<string> = this._currentLang.asObservable();

    constructor() { }

    toggle(selectedLang: string): void {
        this._currentLang.next(selectedLang);
    }

}
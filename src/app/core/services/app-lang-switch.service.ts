import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export const LangOptions = {
    English: 'en',
    Bulgarian: 'bg'
}

@Injectable()
export class AppLangSwitchService {

    private _currentLang = new BehaviorSubject<string | undefined>(undefined);
    currentLang$: Observable<string | undefined> = this._currentLang.asObservable();

    toggle(selectedLang: string | undefined): void {
        this._currentLang.next(selectedLang);
    }

}
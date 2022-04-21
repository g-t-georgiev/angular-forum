import { TestBed } from '@angular/core/testing';

import { AppLangSwitchService } from './app-lang-switch.service';

describe('AppLangSwitchService', () => {
    let service: AppLangSwitchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppLangSwitchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

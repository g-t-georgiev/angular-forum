import { TestBed } from '@angular/core/testing';

import { AppThemeSwitchService } from './app-theme-switch.service';

describe('AppModeSwitchService', () => {
    let service: AppThemeSwitchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppThemeSwitchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

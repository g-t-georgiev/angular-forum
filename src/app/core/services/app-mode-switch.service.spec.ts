import { TestBed } from '@angular/core/testing';

import { AppModeSwitchService } from './app-mode-switch.service';

describe('AppModeSwitchService', () => {
    let service: AppModeSwitchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppModeSwitchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

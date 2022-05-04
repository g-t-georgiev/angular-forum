import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ToggleDropdownDirective } from './toggle-dropdown.directive';

describe('CloseDropdownDirective', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {
                provide: DOCUMENT,
                useValue: document
            }
        ]
    }));

    it('should create an instance', () => {
        const directive = new ToggleDropdownDirective(document);
        expect(directive).toBeTruthy();
    });
});

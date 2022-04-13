import { TestBed } from '@angular/core/testing';

import { AttachCookieInterceptor } from './attach-cookie.interceptor';

describe('AttachCookieInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            AttachCookieInterceptor
        ]
    }));

    it('should be created', () => {
        const interceptor: AttachCookieInterceptor = TestBed.inject(AttachCookieInterceptor);
        expect(interceptor).toBeTruthy();
    });
});

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services';
import { AttachCookieInterceptor, AuthInterceptor } from './interceptors';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: []
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                AuthService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AttachCookieInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }
            ]
        }
    }
}
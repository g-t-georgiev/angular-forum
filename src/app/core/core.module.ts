import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthService, MessageBus } from './services';
import { AttachCookieInterceptor, AuthInterceptor, ResponseMessageInterceptor } from './interceptors';
import { NavComponent } from './nav/nav.component';
import { AppModeSwitchComponent } from './app-mode-switch/app-mode-switch.component';


@NgModule({
    declarations: [
        NavComponent,
        AppModeSwitchComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                AuthService,
                MessageBus.MessageBusService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AttachCookieInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ResponseMessageInterceptor,
                    multi: true
                }
            ]
        }
    }
}
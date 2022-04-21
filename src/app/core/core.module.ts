import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthService, MessageBus, AppThemeSwitchService } from './services';
import { AttachCookieInterceptor, AuthInterceptor, ResponseMessageInterceptor } from './interceptors';
import { NavComponent } from './nav/nav.component';
import { AppThemeSwitchComponent } from './app-theme-switch/app-theme-switch.component';


@NgModule({
    declarations: [
        NavComponent,
        AppThemeSwitchComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        AppThemeSwitchComponent
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                AuthService,
                MessageBus.MessageBusService,
                AppThemeSwitchService,
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
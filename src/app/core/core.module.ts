import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthService, MessageBus, AppThemeSwitchService, AppLangSwitchService } from './services';
import { AttachCookieInterceptor, AuthInterceptor, ResponseMessageInterceptor } from './interceptors';
import { NavComponent } from './nav/nav.component';
import { AppThemeSwitchComponent } from './app-theme-switch/app-theme-switch.component';
import { AppLangSwitchComponent } from './app-lang-switch/app-lang-switch.component';


@NgModule({
    declarations: [
        NavComponent,
        AppThemeSwitchComponent,
        AppLangSwitchComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        AppThemeSwitchComponent,
        AppLangSwitchComponent
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
                AppLangSwitchService,
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
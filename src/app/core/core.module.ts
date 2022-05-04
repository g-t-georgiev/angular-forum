import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AuthService, MessageBus, AppThemeSwitchService, LanguageService } from './services';
import { AttachCookieInterceptor, AuthInterceptor, ResponseMessageInterceptor } from './interceptors';
import { HeaderComponent } from './header/header.component';
import { AppThemeSwitchComponent } from './app-theme-switch/app-theme-switch.component';
import { AppLangSwitchComponent } from './app-lang-switch/app-lang-switch.component';


@NgModule({
    declarations: [
        HeaderComponent,
        AppThemeSwitchComponent,
        AppLangSwitchComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        HeaderComponent
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
                LanguageService.AppLangSwitchService,
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
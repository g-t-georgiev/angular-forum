import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AuthService, AppThemeSwitchService } from './core/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [
      {
          provide: APP_INITIALIZER,
          useFactory: (authService: AuthService) => {
              return () => authService.authenticate$();
          },
          deps: [AuthService],
          multi: true
      },
      {
          provide: APP_INITIALIZER,
          useFactory: (appThemeSwitchService: AppThemeSwitchService) => {
              return () => appThemeSwitchService.init();
          },
          deps: [AppThemeSwitchService],
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

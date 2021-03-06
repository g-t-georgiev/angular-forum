import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { AuthService } from './core/services';



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
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

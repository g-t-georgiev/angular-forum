import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService, MessageBus } from '../services';
import { IUser } from '../../shared/models';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private messageService: MessageBus.MessageBusService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next
            .handle(request)
            .pipe(
                tap(
                    event => {
                        if (event instanceof HttpResponse) {
                            if (
                                event.url?.endsWith('login')
                            ) {
                                this.authService.handleLogin(event.body as IUser);
                                return;
                            }

                            if (
                                event.url?.endsWith('register')
                            ) {
                                this.messageService.notify(
                                    new MessageBus.Message(
                                        MessageBus.MessageTypes.Success,
                                        (event.body as { message: string })?.message
                                    )
                                );

                                return;
                            }

                            if (
                                event.url?.endsWith('logout')
                            ) {
                                this.authService.handleLogout();
                                return;
                            }
                        }
                    }
                )
            );
    }
}
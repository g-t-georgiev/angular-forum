import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageBus } from '../services';

@Injectable()
export class ResponseMessageInterceptor implements HttpInterceptor {

    constructor(
        private messageService: MessageBus.MessageBusService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next
            .handle(request)
            .pipe(
                tap(
                    (event) => {
                        if (event instanceof HttpResponse) {
                            this.messageService.notify(
                                new MessageBus.Message(
                                    event.ok
                                    ? MessageBus.MessageTypes.Success
                                    : MessageBus.MessageTypes.Error,
                                    (event.body as { message: string })?.message
                                )
                            );
                        }
                    }
                ),
                catchError(err => {
                        this.messageService.notify(
                            new MessageBus.Message(
                                MessageBus.MessageTypes.Error,
                                err.error?.message ?? 'Something went wrong'
                            )
                        );

                        return throwError(() => err);
                    }
                ),
            ); 
    }
}
